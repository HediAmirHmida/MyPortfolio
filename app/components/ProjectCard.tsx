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
      <article className="rounded-lg border border-black/10 dark:border-white/10 p-4 hover:shadow-sm transition">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-black/70 dark:text-white/70 mb-3">{description}</p>
        
        {videoUrl && (
          <div className="mb-3">
            <button
              onClick={() => setShowVideo(true)}
              className="relative w-full h-32 rounded-md overflow-hidden bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition group"
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
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech) => (
                <span key={tech} className="text-xs rounded-full px-2 py-0.5 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20">
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
                <span key={t} className="rounded-full px-2 py-0.5 border border-black/10 dark:border-white/10">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md border border-black/10 dark:border-white/15 text-sm hover:bg-black/5 dark:hover:bg-white/10">
              Live
            </a>
          )}
          <a href={githubUrl} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md border border-black/10 dark:border-white/15 text-sm hover:bg-black/5 dark:hover:bg-white/10">
            GitHub
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


