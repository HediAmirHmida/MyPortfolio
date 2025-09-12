"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-10 justify-start">
        <Link href="/" className="font-bold text-lg tracking-tight text-white hover:text-white/80 transition-colors">
          Hedi Amir Hmida Portfolio
        </Link>
        <nav className="ml-auto flex items-center gap-8">
          <Link href="/about" className="hover:underline font-semibold text-white/90 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:underline font-semibold text-white/90 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline font-semibold text-white/90 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}


