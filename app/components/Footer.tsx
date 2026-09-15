export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6 text-sm text-center text-[var(--muted)]">
      <div className="container mx-auto px-4">
        © {new Date().getFullYear()} Hedi Amir Hmida — All rights reserved.
      </div>
    </footer>
  );
}
