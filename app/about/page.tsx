import Image from "next/image";

export const metadata = { title: "About — Amir" };

export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.jpeg"
            alt="Hedi Amir Hmida"
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">Hedi Amir Hmida</h1>
            <p className="text-white/70 text-sm">
              Software Engineer • M.Sc. Computer Science, University of Passau
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/ResumeHmidaHediAmir.pdf" download className="px-3 py-1.5 rounded-md border border-white/20 text-sm hover:bg-white/10 transition">Download CV</a>
          <a href="/contact" className="px-3 py-1.5 rounded-md border border-white/20 text-sm hover:bg-white/10 transition">Contact</a>
          <a href="https://www.linkedin.com/in/hedi-amir-hmida-233339278" target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded-md border border-white/20 text-sm hover:bg-white/10 transition">LinkedIn</a>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-lg border border-white/20 p-5 bg-black/20">
          <h2 className="text-lg font-semibold mb-2 text-white">About me</h2>
          <p className="text-sm text-white/80">
            Master&apos;s student in Computer Science at the University of Passau with hands-on industry experience in full-stack
            web and mobile development. Delivered real-world projects during two internships and built apps using React,
            Flutter, Node.js, and MySQL. Actively seeking a working student role in backend, QA, or full-stack development to
            contribute to agile teams and grow in a modern software engineering environment.
          </p>
        </div>
        <div className="rounded-lg border border-white/20 p-5 bg-black/20">
          <h3 className="text-base font-semibold mb-2 text-white">Quick facts</h3>
          <ul className="text-sm space-y-1 text-white/80">
            <li>Location: Passau, Germany</li>
            <li>Languages: English, Arabic, French and basic German</li>
            <li>Open to: Working student roles</li>
            <li>Focus: Backend, QA, Full-stack</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border border-white/20 p-5 bg-black/20">
        <h2 className="text-lg font-semibold mb-4 text-white">Skills</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium text-white/70 mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "PHP", "Dart"].map((s) => (
                <span key={s} className="text-xs rounded-full px-2 py-1 border border-white/20 bg-white/10 text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white/70 mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "Tailwind CSS", "Flutter"].map((s) => (
                <span key={s} className="text-xs rounded-full px-2 py-1 border border-white/20 bg-white/10 text-white"></span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white/70 mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "PHP", "Spring Boot"].map((s) => (
                <span key={s} className="text-xs rounded-full px-2 py-1 border border-white/20 bg-white/10 text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white/70 mb-2">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "MongoDB", "Prisma ORM"].map((s) => (
                <span key={s} className="text-xs rounded-full px-2 py-1 border border-white/20 bg-white/10 text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white/70 mb-2">Testing & QA</h3>
            <div className="flex flex-wrap gap-2">
              {["Playwright", "Postman", "JUnit", "Selenium"].map((s) => (
                <span key={s} className="text-xs rounded-full px-2 py-1 border border-white/20 bg-white/10 text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white/70 mb-2">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "Docker", "GitHub Actions", "AWS", "Vercel"].map((s) => (
                <span key={s} className="text-xs rounded-full px-2 py-1 border border-white/20 bg-white/10 text-white">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-medium text-white/70 mb-2">Others</h3>
          <div className="flex flex-wrap gap-2">
            {["REST APIs", "CI/CD", "Responsive Design", "Agile Development"].map((s) => (
              <span key={s} className="text-xs rounded-full px-2 py-1 border border-white/20 bg-white/10 text-white">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-white/20 p-5 bg-black/20">
          <h2 className="text-lg font-semibold mb-3 text-white">Experience</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-medium text-sm text-white">Software Engineer Intern</h3>
                <span className="text-xs text-white/60">Jul 2024 – Aug 2024</span>
              </div>
              <div className="text-sm text-white/70 mb-2">Mammut Web Solutions • Tunisia</div>
              <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
                <li>Built a mobile-first food surplus donation and resale platform, enabling restaurants and hotels to list leftover meals for free or at reduced prices.</li>
                <li>Developed full-stack features using Flutter, Express.js, and MySQL, including real-time inventory updates and a user messaging system for order coordination.</li>
                <li>Reduced manual tracking and phone coordination by 70% by integrating smart notifications and backend validations.</li>
                <li>Designed and tested 20+ API routes with Postman to ensure secure, stable, and user-friendly interactions.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-medium text-sm text-white">Software Development Intern</h3>
                <span className="text-xs text-white/60">Jul 2023 – Aug 2023</span>
              </div>
              <div className="text-sm text-white/70 mb-2">Mammut Web Solutions • Tunisia</div>
              <ul className="text-xs text-white/80 space-y-1 list-disc list-inside">
                <li>Led frontend development of a pharmaceutical admin dashboard using React.js and Node.js, cutting manual data entry time by 50% and improving usability for non-technical staff.</li>
                <li>Designed reusable UI components with secure role-based access control, improving maintainability across the codebase.</li>
                <li>Wrote unit tests with JUnit, achieving 90% coverage and enabling faster, bug-free deployments.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/20 p-5 bg-black/20">
          <h2 className="text-lg font-semibold mb-3 text-white">Education</h2>
          <div className="space-y-4">
            <div>
              <div className="font-medium text-sm text-white">Master&apos;s Degree in Computer Science</div>
              <div className="text-sm text-white/70">Faculty of Computer Science and Mathematics, University of Passau</div>
              <div className="text-xs text-white/60">2024 - Present (Current Student)</div>
            </div>
            <div>
              <div className="font-medium text-sm text-white">Computer Science Engineering Degree</div>
              <div className="text-sm text-white/70">National School of Computer Science, Tunisia</div>
              <div className="text-xs text-white/60">2022 - 2024</div>
            </div>
            <div>
              <div className="font-medium text-sm text-white">Preparatory Degree for Engineering Studies</div>
              <div className="text-sm text-white/70">Preparatory Institute for Engineering Studies of Monastir (IPEIM)</div>
              <div className="text-xs text-white/60">2020 - 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


