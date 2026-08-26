import type { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs'
import path from 'path'
import { GoogleGenAI } from '@google/genai'

let resumeCtx = ''

try {
  const txtPath = path.join(process.cwd(), 'src', 'content', 'resume.txt')
  const jsonPath = path.join(process.cwd(), 'src', 'content', 'resumeData.json')
  
  if (fs.existsSync(txtPath)) {
    resumeCtx = fs.readFileSync(txtPath, 'utf8')
  } else if (fs.existsSync(jsonPath)) {
    const raw = fs.readFileSync(jsonPath, 'utf8')
    resumeCtx = JSON.stringify(JSON.parse(raw), null, 2)
  }
} catch {}

const rateLimitMap = new Map<string, number>()
const RATE_LIMIT_WINDOW_MS = 2000 

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const last = rateLimitMap.get(ip) || 0
  if (now - last < RATE_LIMIT_WINDOW_MS) return true
  rateLimitMap.set(ip, now)
  return false
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  try {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '127.0.0.1'
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ message: 'Please wait a moment before sending another message.' })
    }

    const body = req.body || {}
    const msgs = body.messages || []
    const rawLast = msgs.length ? msgs[msgs.length - 1].content || msgs[msgs.length - 1].text || '' : body.prompt || ''
    const userMsg = String(rawLast).trim().slice(0, 400)

    if (!userMsg) return res.status(400).json({ message: 'Please provide a valid question.' })

    const groqKey = process.env.GROQ_API_KEY
    const geminiKey = process.env.GEMINI_API_KEY

    const systemInstruction = `You are Syed Abrar Husain's personal AI Virtual Avatar on his portfolio website.
You speak in FIRST-PERSON ("I built...", "As a 4th-year CS student at Integral University...", "My skills include...").

YOUR ROLE & INSTRUCTIONS:
- You are an intelligent, articulate, conversational representation of Syed Abrar Husain.
- Base your knowledge on Syed's background and resume context provided below.
- When asked about skills, projects (AppFlix, Writify, Jamā’ah Journal, Keeper, Move It, E-Commerce Store), education, or experience, explain them thoroughly and accurately.
- When asked reflective or open-ended questions like "What skills do you lack?", "What are your weaknesses?", or "What are you learning next?", answer thoughtfully as a humble, ambitious 4th-year student (e.g. noting areas like DevOps, Kubernetes, microservice orchestration, or system design at scale that you are eager to master next).
- If asked general questions or math (like 2+3), answer briefly and cordially, then naturally bring the context back to your software engineering portfolio.
- Keep answers engaging, natural, friendly, and concise (2-4 sentences).`;

    const promptContext = `Resume Context:\n${resumeCtx}\n\nUser Question:\n${userMsg}`

    // List of active Groq models for your account
    const groqModels = [
      'groq/compound',
      'groq/compound-mini',
      'qwen/qwen3.6-27b',
      'openai/gpt-oss-120b',
      'llama-3.1-70b-versatile',
      'llama-3.3-70b-versatile',
      'llama3-70b-8192'
    ];

    // 1. Try Groq API (First Priority)
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
              return res.status(200).json({ message: text, provider: `groq (${model})` });
            }
          }
        } catch (e) {
          console.error(`[Groq Model ${model} error]:`, e);
        }
      }
    }

    // 2. Try Gemini API (Secondary Priority)
    if (geminiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey: geminiKey })
        const response = await ai.models.generateContent({
          model: 'gemini-2.0-flash',
          contents: promptContext,
          config: { systemInstruction, temperature: 0.5 },
        })
        if (response.text) {
          res.setHeader('X-AI-Provider', 'gemini')
          return res.status(200).json({ message: response.text.trim(), provider: 'gemini' })
        }
      } catch (e) {
        console.error('[Gemini Error]:', e)
      }
    }

    // 3. Fallback Heuristic
    res.setHeader('X-AI-Provider', 'fallback')
    return res.status(200).json({
      message: `I am Syed Abrar Husain's virtual avatar. (Fallback mode active).`,
      provider: 'fallback'
    })
  } catch (e) {
    return res.status(200).json({ message: 'Sorry, something went wrong.', provider: 'error-fallback' })
  }
}
