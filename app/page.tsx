import ProjectCard from "./components/ProjectCard";
import { siteConfig } from "../lib/site";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-12 sm:py-16">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-sm font-medium text-[var(--accent)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          Currently at Oncare GmbH · Munich
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
          Hi, I&apos;m Hedi Amir Hmida
        </h1>
        <p className="text-white/80 max-w-2xl mb-8 text-lg leading-relaxed">
          Backend / Full-Stack Developer (Working Student) and Master&apos;s student in Computer Science
          at the University of Passau. I integrate AI into healthcare platforms, design reliable NestJS
          backends, and ship React interfaces with a focus on architecture, testing, and user experience.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/projects" className="btn-primary">
            View Projects
          </a>
          <a href="/about" className="btn-ghost">
            About me
          </a>
          <a href="/contact" className="btn-ghost">
            Contact
          </a>
          <a href={siteConfig.resumeHref} download className="btn-ghost">
            Download CV
          </a>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6 text-white">Featured Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectCard
            title="SmartStockManager"
            description="Visualize your inventory, predict restocks, and monitor earnings – all in one place. Built with modern web technologies for efficient business management."
            githubUrl="https://github.com/HediAmirHmida/SmartStockManager"
            liveUrl="https://smart-stock-manager-supabase.vercel.app"
            tags={["Web App", "Inventory", "Analytics"]}
            videoUrl="/Smart Stock Managercompressed.mp4"
            technologies={["React", "Next.js", "Tailwind CSS", "TypeScript", "Prisma", "MySQL", "Vercel"]}
          />
          <ProjectCard
            title="RoboServe"
            description="A Flutter-based delivery and order management app integrated with a Bluetooth-enabled robot for automated service."
            githubUrl="https://github.com/HediAmirHmida/RoboServe"
            tags={["Flutter", "Mobile", "Bluetooth", "IoT"]}
            technologies={["Flutter", "Dart", "Bluetooth", "Mobile App", "IoT"]}
          />
        </div>
      </section>
    </div>
  );
}
