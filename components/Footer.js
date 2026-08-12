export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name. Built with Next.js.
      </div>
    </footer>
  );
}
