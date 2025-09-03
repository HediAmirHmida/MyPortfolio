export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-6 text-sm text-center text-black/70 dark:text-white/70">
      <div className="container mx-auto px-4">
        © {new Date().getFullYear()} Amir — All rights reserved.
      </div>
    </footer>
  );
}


