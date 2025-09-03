"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-10 justify-start">
        <Link href="/" className="font-semibold tracking-tight">
          Hedi Amir Hmida Portfolio
        </Link>
        <nav className="ml-auto flex items-center gap-8">
          <Link href="/about" className="hover:underline font-semibold">
            About
          </Link>
          <Link href="/projects" className="hover:underline font-semibold">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline font-semibold">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}


