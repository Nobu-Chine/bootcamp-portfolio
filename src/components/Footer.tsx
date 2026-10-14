export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 text-center text-xs text-muted">
      <a
        href="https://github.com/Nobu-Chine"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
      >
        GitHub ↗
      </a>
      <p className="mt-4">© {new Date().getFullYear()} 知念信之</p>
    </footer>
  );
}
