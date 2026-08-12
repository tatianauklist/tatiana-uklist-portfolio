import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Your Name
        </Link>
        <div className="flex gap-6 text-sm text-slate-600">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/projects" className="hover:text-slate-900">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-slate-900">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
