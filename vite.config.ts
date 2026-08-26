import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function apiChatDevPlugin(): Plugin {
  return {
    name: 'api-chat-dev-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/chat' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              // Load .env.local manually if keys exist
              let groqKey = process.env.GROQ_API_KEY || '';
              let geminiKey = process.env.GEMINI_API_KEY || '';

              const envLocalPath = path.join(process.cwd(), '.env.local');
              if (fs.existsSync(envLocalPath)) {
                const envContent = fs.readFileSync(envLocalPath, 'utf8');
                const groqMatch = envContent.match(/GROQ_API_KEY=["']?([^"'\r\n]+)["']?/);
                const geminiMatch = envContent.match(/GEMINI_API_KEY=["']?([^"'\r\n]+)["']?/);
                if (groqMatch && groqMatch[1]) groqKey = groqMatch[1].trim();
                if (geminiMatch && geminiMatch[1]) geminiKey = geminiMatch[1].trim();
              }

              // Load resume context
              let resumeCtx = '';
              const txtPath = path.join(process.cwd(), 'src', 'content', 'resume.txt');
              const jsonPath = path.join(process.cwd(), 'src', 'content', 'resumeData.json');
              if (fs.existsSync(txtPath)) {
                resumeCtx = fs.readFileSync(txtPath, 'utf8');
              } else if (fs.existsSync(jsonPath)) {
                resumeCtx = fs.readFileSync(jsonPath, 'utf8');
              }

              const parsedBody = JSON.parse(body || '{}');
              const msgs = parsedBody.messages || [];
              const rawLast = msgs.length ? msgs[msgs.length - 1].content || msgs[msgs.length - 1].text || '' : parsedBody.prompt || '';
              const userMsg = String(rawLast).trim().slice(0, 400);

              res.setHeader('Content-Type', 'application/json');

              if (!userMsg) {
                res.statusCode = 400;
                res.end(JSON.stringify({ message: 'Please provide a valid question.' }));
                return;
              }

              const systemInstruction = `You are Syed Abrar Husain's personal AI Virtual Avatar on his portfolio website.
You speak in FIRST-PERSON ("I built...", "As a 4th-year CS student at Integral University...", "My skills include...").

YOUR ROLE & INSTRUCTIONS:
- You are an intelligent, articulate, conversational representation of Syed Abrar Husain.
- Base your knowledge on Syed's background and resume context provided below.
- When asked about skills, projects (AppFlix, Writify, Jamā’ah Journal, Keeper, Move It, E-Commerce Store), education, or experience, explain them thoroughly and accurately.
- When asked reflective or open-ended questions like "What skills do you lack?", "What are your weaknesses?", or "What are you learning next?", answer thoughtfully as a humble, ambitious 4th-year student (e.g. noting areas like DevOps, Kubernetes, microservice orchestration, or system design at scale that you are eager to master next).
- If asked general questions or math (like 2+3), answer briefly and cordially, then naturally bring the context back to your software engineering portfolio.
- Keep answers engaging, natural, friendly, and concise (2-4 sentences).`;

              const promptContext = `Resume Context:\n${resumeCtx}\n\nUser Question:\n${userMsg}`;

              // Verified active models on your Groq key
              const groqModels = [
                'groq/compound',
                'groq/compound-mini',
                'qwen/qwen3.6-27b',
                'openai/gpt-oss-120b',
                'llama-3.1-70b-versatile',
                'llama-3.3-70b-versatile',
                'llama3-70b-8192'
              ];

              // 1. Groq API (First Priority)
              if (groqKey) {
                for (const model of groqModels) {
                  try {
                    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                      method: 'POST',
                      headers: {
                        'Authorization': `Bearer ${groqKey}`,
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        model: model,
                        messages: [
                          { role: 'system', content: systemInstruction },
                          { role: 'user', content: promptContext },
                        ],
                        temperature: 0.5,
                        max_tokens: 450,
                      }),
                    });

                    if (groqRes.ok) {
                      const data = await groqRes.json();
                      const text = data?.choices?.[0]?.message?.content?.trim();
                      if (text) {
                        res.setHeader('X-AI-Provider', `groq (${model})`);
                        res.statusCode = 200;
                        res.end(JSON.stringify({ message: text, provider: `groq (${model})` }));
                        return;
                      }
                    }
                  } catch (e) {
                    console.error(`[Groq Model ${model} error]:`, e);
                  }
                }
              }

              // 2. Gemini API
              if (geminiKey) {
                try {
                  const gemRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      contents: [{ parts: [{ text: `${systemInstruction}\n\n${promptContext}` }] }]
                    })
                  });

                  if (gemRes.ok) {
                    const gemData = await gemRes.json();
                    const text = gemData?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
                    if (text) {
                      res.setHeader('X-AI-Provider', 'gemini');
                      res.statusCode = 200;
                      res.end(JSON.stringify({ message: text, provider: 'gemini' }));
                      return;
                    }
                  }
                } catch (e) {
                  console.error('[Gemini Fetch Error]:', e);
                }
              }

              // 3. Fallback only if no API keys succeed
              res.setHeader('X-AI-Provider', 'fallback');
              res.statusCode = 200;
              res.end(JSON.stringify({
                message: `I am Syed Abrar Husain's virtual avatar. (Fallback mode active).`,
                provider: 'fallback'
              }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ message: 'Error processing request', error: err?.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), apiChatDevPlugin()],
});
