type ProjectCardProps = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
};

export default function ProjectCard({ title, description, href, tags = [] }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-black/10 dark:border-white/10 p-4 hover:shadow-sm transition">
      <h3 className="font-semibold mb-1">
        {href ? (
          <a href={href} className="underline underline-offset-2">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="text-sm text-black/70 dark:text-white/70 mb-3">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded-full px-2 py-0.5 border border-black/10 dark:border-white/10">
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}


