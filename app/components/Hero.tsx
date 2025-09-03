export default function Hero() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Hi, I’m Hedi Amir Hmida</h1>
      <p className="text-black/70 dark:text-white/70 max-w-2xl mb-6">
        Full‑stack developer crafting performant, accessible web apps. Explore my
        projects, read about my background, or get in touch.
      </p>
      <div className="flex gap-3">
        <a href="/projects" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">
          View Projects
        </a>
        <a href="/contact" className="px-4 py-2 rounded-md border border-black/15 dark:border-white/20">
          Contact Me
        </a>
        <a href="/ResumeHmidaHediAmir.pdf" download className="px-4 py-2 rounded-md border border-black/15 dark:border-white/20">
          Download CV
        </a>
      </div>
    </section>
  );
}


