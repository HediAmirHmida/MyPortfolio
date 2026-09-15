import Image from "next/image";
import { siteConfig } from "../../lib/site";

export const metadata = { title: "About" };

const skillGroups = [
  { title: "Languages", items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "PHP", "Dart"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Flutter"] },
  { title: "Backend", items: ["NestJS", "Node.js", "Express.js", "PHP", "Spring Boot"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "Prisma ORM"] },
  { title: "Testing & QA", items: ["Playwright", "Postman", "JUnit", "Selenium"] },
  { title: "DevOps & Tools", items: ["Git", "GitHub", "Docker", "GitHub Actions", "AWS", "Vercel"] },
];

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.jpeg"
            alt="Hedi Amir Hmida"
            width={72}
            height={72}
            className="h-18 w-18 h-[72px] w-[72px] rounded-full object-cover ring-2 ring-[var(--accent)]/40"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Hedi Amir Hmida</h1>
            <p className="text-white/80 text-base leading-relaxed">
              Backend / Full-Stack Developer • M.Sc. Computer Science, University of Passau
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.resumeHref} download className="btn-primary">
            Download CV
          </a>
          <a href="/contact" className="btn-ghost">
            Contact
          </a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="btn-ghost">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 card p-6">
          <h2 className="text-xl font-bold mb-4 text-white">About me</h2>
          <p className="text-base text-white/85 leading-relaxed">
            Master&apos;s student in Computer Science at the University of Passau and currently a Backend /
            Full-Stack Developer (Working Student) at Oncare GmbH in Munich. I work on healthcare platforms
            where I integrate AI into clinical workflows, connect internal microservices, and ship features
            across NestJS/Express backends and React interfaces. Previously I delivered full-stack web and
            mobile products during internships at Mammut Web Solutions.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-3 text-white">Quick facts</h3>
          <ul className="text-base space-y-2 text-white/85 leading-relaxed">
            <li>Location: Passau / Munich, Germany</li>
            <li>Languages: English, Arabic, French, basic German</li>
            <li>Currently: Working student at Oncare GmbH</li>
            <li>Focus: Backend, Full-stack, AI integration</li>
          </ul>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-xl font-bold mb-6 text-white">Experience</h2>
        <div className="space-y-8">
          <article className="relative pl-5 border-l-2 border-[var(--accent)]/50">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold text-base text-white">Backend / Full-Stack Developer (Working Student)</h3>
              <span className="text-sm text-[var(--accent)] font-medium">Mar 2026 – Present</span>
            </div>
            <div className="text-base text-white/80 mb-2 font-medium">Oncare GmbH • Munich, Germany</div>
            <ul className="text-sm text-white/85 space-y-2 list-disc list-inside leading-relaxed">
              <li>
                Integrated a CE-marked AI solution into the healthcare professional (HCP) platform by aggregating
                and filtering patient data from multiple internal microservices, designing prompts for treatment
                recommendations, and implementing AI-based summarization, multilingual translation, error handling,
                and fallbacks for context-window and 12-language requirements.
              </li>
              <li>
                Built the feature across the stack with a NestJS/Express backend broker and a React-based HCP
                interface, plus unit and end-to-end tests for reliable AI integration.
              </li>
              <li>
                Contributed to an encrypted medical-data export for HCP offboarding and architectural updates to
                the PADnext billing system.
              </li>
            </ul>
          </article>

          <article className="relative pl-5 border-l-2 border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold text-base text-white">Software Engineer Intern</h3>
              <span className="text-sm text-white/70 font-medium">Jul 2024 – Aug 2024</span>
            </div>
            <div className="text-base text-white/80 mb-2 font-medium">Mammut Web Solutions • Tunisia</div>
            <ul className="text-sm text-white/85 space-y-2 list-disc list-inside leading-relaxed">
              <li>Built a mobile-first food surplus donation and resale platform, enabling restaurants and hotels to list leftover meals for free or at reduced prices.</li>
              <li>Developed full-stack features using Flutter, Express.js, and MySQL, including real-time inventory updates and a user messaging system for order coordination.</li>
              <li>Reduced manual tracking and phone coordination by 70% by integrating smart notifications and backend validations.</li>
              <li>Designed and tested 20+ API routes with Postman to ensure secure, stable, and user-friendly interactions.</li>
            </ul>
          </article>

          <article className="relative pl-5 border-l-2 border-white/15">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <h3 className="font-semibold text-base text-white">Software Development Intern</h3>
              <span className="text-sm text-white/70 font-medium">Jul 2023 – Aug 2023</span>
            </div>
            <div className="text-base text-white/80 mb-2 font-medium">Mammut Web Solutions • Tunisia</div>
            <ul className="text-sm text-white/85 space-y-2 list-disc list-inside leading-relaxed">
              <li>Led frontend development of a pharmaceutical admin dashboard using React.js and Node.js, cutting manual data entry time by 50% and improving usability for non-technical staff.</li>
              <li>Designed reusable UI components with secure role-based access control, improving maintainability across the codebase.</li>
              <li>Wrote unit tests with JUnit, achieving 90% coverage and enabling faster, bug-free deployments.</li>
            </ul>
          </article>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4 text-white">Education</h2>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-base text-white">Master&apos;s Degree in Computer Science</div>
              <div className="text-base text-white/80 leading-relaxed">Faculty of Computer Science and Mathematics, University of Passau</div>
              <div className="text-sm text-[var(--accent)] font-medium">2024 – Present</div>
            </div>
            <div>
              <div className="font-semibold text-base text-white">Computer Science Engineering Degree</div>
              <div className="text-base text-white/80 leading-relaxed">National School of Computer Science, Tunisia</div>
              <div className="text-sm text-white/70 font-medium">2022 – 2024</div>
            </div>
            <div>
              <div className="font-semibold text-base text-white">Preparatory Degree for Engineering Studies</div>
              <div className="text-base text-white/80 leading-relaxed">Preparatory Institute for Engineering Studies of Monastir (IPEIM)</div>
              <div className="text-sm text-white/70 font-medium">2020 – 2022</div>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4 text-white">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-base font-semibold text-white/90 mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-base font-semibold text-white/90 mb-3">Others</h3>
            <div className="flex flex-wrap gap-2">
              {["REST APIs", "Microservices", "LLM / AI integration", "CI/CD", "Responsive Design", "Agile Development"].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
