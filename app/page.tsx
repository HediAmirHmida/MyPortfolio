import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Hi, I&apos;m Hedi Amir Hmida</h1>
        <p className="text-black/70 dark:text-white/70 max-w-2xl mb-6">
          Software Engineer and Master&apos;s student in Computer Science at the University of Passau.
          I build full‑stack web and mobile applications with modern frameworks, focusing on
          clean architecture, performance, and great developer/user experience.
        </p>
        <div className="flex gap-3">
          <a href="/projects" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">View Projects</a>
          <a href="/contact" className="px-4 py-2 rounded-md border border-black/15 dark:border-white/20">Contact Me</a>
          <a href="/ResumeHmidaHediAmir.pdf" download className="px-4 py-2 rounded-md border border-black/15 dark:border-white/20">Download CV</a>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ProjectCard
            title="SmartStockManager"
            description="Visualize your inventory, predict restocks, and monitor earnings – all in one place. Built with modern web technologies for efficient business management."
            githubUrl="https://github.com/HediAmirHmida/SmartStockManager"
            liveUrl="https://smart-stock-manager-suiw.vercel.app"
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
