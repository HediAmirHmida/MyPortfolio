"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle theme"
      className="rounded-md border border-black/10 dark:border-white/15 px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}


