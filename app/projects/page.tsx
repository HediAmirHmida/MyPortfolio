import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { fetchGithubRepos } from "../../lib/github";
import { siteConfig } from "../../lib/site";

export const metadata = { title: "Projects — Amir" };

export default async function ProjectsPage() {
  const repos = await fetchGithubRepos();
  const username = siteConfig.githubUsername;
  const pinned = new Set((siteConfig.pinnedRepos || []).map((n) => n.toLowerCase()));
  const pinnedRepos = repos.filter((r) => pinned.has(r.name.toLowerCase()));
  const otherRepos = repos.filter((r) => !pinned.has(r.name.toLowerCase()));

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Projects</h1>
        <p className="text-sm text-black/70 dark:text-white/70">
          A showcase of my development work, from full-stack web applications to mobile apps and backend systems. Each project demonstrates different technologies and problem-solving approaches.
        </p>
      </div>
      {username && (
        <div className="text-sm">
          <Link className="underline" href={`https://github.com/${username}`} target="_blank">
            View GitHub profile →
          </Link>
        </div>
      )}
      {repos.length === 0 ? (
        <p className="text-sm text-black/70 dark:text-white/70">
          {username ? "No repositories found or API limit reached." : "Set NEXT_PUBLIC_GITHUB_USERNAME in .env.local to load repos."}
        </p>
      ) : (
        <div className="space-y-10">
          {pinnedRepos.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Pinned</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {pinnedRepos.map((r) => (
                  <ProjectCard
                    key={r.id}
                    title={r.name}
                    description={r.description || "No description provided."}
                    githubUrl={r.html_url}
                    liveUrl={r.homepage || null}
                    tags={r.topics || []}
                    stars={r.stargazers_count}
                    videoUrl={r.videoUrl}
                    technologies={r.technologies}
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            {pinnedRepos.length > 0 && <h2 className="text-lg font-semibold mb-4">All repositories</h2>}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {(pinnedRepos.length > 0 ? otherRepos : repos).map((r) => (
                <ProjectCard
                  key={r.id}
                  title={r.name}
                  description={r.description || "No description provided."}
                  githubUrl={r.html_url}
                  liveUrl={r.homepage || null}
                  tags={r.topics || []}
                  stars={r.stargazers_count}
                  videoUrl={r.videoUrl}
                  technologies={r.technologies}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


