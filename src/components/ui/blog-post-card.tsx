import React from "react";
import { Badge } from "./badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "./card";
import { cn } from "../../lib/utils";

export interface ArticleCardProps {
  headline: string;
  excerpt: string;
  cover?: string;
  tag?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
  impact?: string;
  readingTime?: number;
  publishedAt?: Date;
  clampLines?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  cover,
  tag,
  tags,
  headline,
  excerpt,
  role,
  impact,
  clampLines = 3,
  liveUrl,
  githubUrl,
}) => {
  const hasMeta = tag || (tags && tags.length > 0);

  return (
    <Card className="flex w-full flex-col gap-3 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-xl hover:border-white/25 transition-all">
      {cover && (
        <CardHeader className="p-0">
          <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-black/40">
            <img
              src={cover}
              alt={headline}
              className="h-full w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
            />
            {tag && (
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="backdrop-blur-md bg-black/70 border border-white/20 px-3 py-1 text-xs text-white">
                  {tag}
                </Badge>
              </div>
            )}
          </div>
        </CardHeader>
      )}

      <CardContent className="flex-grow p-3 flex flex-col justify-between space-y-3">
        <div>
          {hasMeta && (
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-white/60">
              {tags && tags.slice(0, 4).map((t) => (
                <Badge key={t} variant="secondary" className="text-[10px] bg-white/10 text-white/80 border-white/10">
                  {t}
                </Badge>
              ))}
            </div>
          )}

          <h2 className="mb-2 text-xl font-bold leading-tight text-white">
            {headline}
          </h2>

          <p
            className={cn("text-xs text-white/70 leading-relaxed", {
              "overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [display:-webkit-box]":
                clampLines && clampLines > 0,
            })}
            style={{
              WebkitLineClamp: clampLines,
            }}
          >
            {excerpt}
          </p>
        </div>

        {/* Live & GitHub Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-lg text-xs font-semibold hover:bg-white/90 transition-colors shadow-sm"
            >
              <span>Live Demo</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white rounded-lg text-xs font-medium border border-white/15 hover:bg-white/20 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
        </div>
      </CardContent>

      {/* Card Footer with Emerald Green Pulsing Highlight */}
      <CardFooter className="flex items-center justify-between p-3 pt-3 border-t border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/50">Category</p>
          <p className="font-semibold text-xs text-white/90">{role}</p>
        </div>
        {impact && (
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-white/50">Core Stack</p>
            <span className="inline-flex items-center gap-1.5 font-semibold text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {impact}
            </span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
