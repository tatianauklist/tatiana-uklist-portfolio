'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { href: '/', label: 'Home', match: (path) => path === '/' },
  { href: '/work', label: 'Work', match: (path) => path.startsWith('/work') },
  { href: '/blog', label: 'Blog', match: (path) => path.startsWith('/blog') },
  { href: '/about', label: 'About', match: (path) => path.startsWith('/about') },
  { href: '/contact', label: 'Contact', match: (path) => path.startsWith('/contact') },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-borderStrong bg-headerBg px-14 py-5 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="callno border-[1.5px] border-borderStrong px-2.5 py-1.5">TAT&nbsp;·&nbsp;155.2</div>
        <div className="font-serif text-[19px] font-semibold tracking-tight text-ink">Tatiana Uklist</div>
      </Link>
      <nav className="flex gap-1.5">
        {NAV.map((item) => {
          const active = item.match(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`callno rounded-t border border-borderStrong border-b-0 px-4 py-2 uppercase tracking-[0.04em] ${
                active ? 'bg-borderStrong font-bold text-cream' : 'font-normal text-tabInk'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
