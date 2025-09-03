"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Hedi Amir Hmida Portfolio
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <a
            href="/ResumeHmidaHediAmir.pdf"
            download
            className="px-3 py-1.5 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 text-sm"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}


