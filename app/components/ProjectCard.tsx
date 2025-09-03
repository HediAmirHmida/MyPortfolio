"use client";

import { useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string | null;
  tags?: string[];
  stars?: number;
  videoUrl?: string;
  technologies?: string[];
};

export default function ProjectCard({ title, description, githubUrl, liveUrl, tags = [], stars, videoUrl, technologies = [] }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <article className="rounded-lg border border-black/10 dark:border-white/10 p-6 hover:shadow-sm transition">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-black/70 dark:text-white/70 mb-3">{description}</p>
        
        {videoUrl && (
          <div className="mb-3">
            <button
              onClick={() => setShowVideo(true)}
              className="relative w-full h-40 rounded-md overflow-hidden bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition group"
            >
              <video
                src={videoUrl}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                muted
                loop
                onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        )}
        
        {technologies.length > 0 && (
          <div className="mb-3">
            <h4 className="text-xs font-medium text-black/60 dark:text-white/60 mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span key={tech} className="text-sm rounded-full px-2.5 py-0.5 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-2 mb-3 text-xs text-black/60 dark:text-white/60">
          {typeof stars === "number" && (
            <span className="inline-flex items-center gap-1">
              ★ <span>{stars}</span>
            </span>
          )}
          {tags.length > 0 && <span>•</span>}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-sm rounded-full px-2 py-0.5 border border-black/10 dark:border-white/10">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 pt-1">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black dark:bg-white dark:text-black px-3.5 py-2 text-sm font-medium shadow-sm hover:shadow transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <path d="M15 3h6v6"/>
                <path d="M10 14 21 3"/>
              </svg>
              <span>View live demo</span>
            </a>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black text-white px-3.5 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.73.5.77 5.46.77 11.73c0 4.92 3.19 9.1 7.62 10.57.56.1.77-.24.77-.55v-2c-3.1.68-3.76-1.33-3.76-1.33-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1.01 1.74 2.65 1.24 3.3.95.1-.74.4-1.24.73-1.53-2.48-.28-5.1-1.24-5.1-5.55 0-1.23.43-2.23 1.14-3.02-.11-.28-.5-1.44.11-3 0 0 .95-.3 3.1 1.19.86-.24 1.78-.38 2.7-.38.92 0 1.84.13 2.7.38 2.15-1.49 3.1-1.19 3.1-1.19.61 1.56.22 2.72.11 3 .71.79 1.14 1.79 1.14 3.02 0 4.32-2.62 5.27-5.12 5.55.41.35.77 1.03.77 2.08v3.08c0 .31.21.65.78.55 4.43-1.47 7.62-5.65 7.62-10.57C23.23 5.46 18.27.5 12 .5Z"/>
            </svg>
            <span>View source code</span>
          </a>
        </div>
      </article>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="relative max-w-4xl w-full max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>
            <video
              src={videoUrl}
              className="w-full h-full rounded-lg"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </>
  );
}


