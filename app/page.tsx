import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Hi, I&apos;m Hedi Amir Hmida</h1>
        <p className="text-white/80 max-w-2xl mb-6">
          Software Engineer and Master&apos;s student in Computer Science at the University of Passau.
          I build full‑stack web and mobile applications with modern frameworks, focusing on
          clean architecture, performance, and great developer/user experience.
        </p>
        <div className="flex gap-3">
          <a href="/projects" className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition">
            View Projects
          </a>
          <a href="/contact" className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
            Contact Me
          </a>
          <a href="/ResumeHmidaHediAmir.pdf" download className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition">
            Download CV
          </a>
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
