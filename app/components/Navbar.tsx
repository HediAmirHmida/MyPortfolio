"use client";

import Link from "next/link";
import { siteConfig } from "../../lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[#070b14]/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-10 justify-start">
        <Link href="/" className="font-bold text-lg tracking-tight text-white hover:text-[var(--accent)] transition-colors">
          Hedi Amir Hmida
        </Link>
        <nav className="ml-auto flex items-center gap-6 sm:gap-8">
          <Link href="/about" className="font-semibold text-white/80 hover:text-[var(--accent)] transition-colors">
            About
          </Link>
          <Link href="/projects" className="font-semibold text-white/80 hover:text-[var(--accent)] transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="font-semibold text-white/80 hover:text-[var(--accent)] transition-colors">
            Contact
          </Link>
          <a href={siteConfig.resumeHref} download className="btn-ghost hidden sm:inline-flex !py-1.5 !px-3 text-sm">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
