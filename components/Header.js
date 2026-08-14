'use client';

import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b-2 border-borderStrong bg-headerBg backdrop-blur-sm">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-14 lg:py-5">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5" onClick={() => setMenuOpen(false)}>
          <div className="callno border-[1.5px] border-borderStrong px-2 py-1 sm:px-2.5 sm:py-1.5">
            TAT&nbsp;·&nbsp;155.2
          </div>
          <div className="font-serif text-base font-semibold tracking-tight text-ink sm:text-[19px]">
            Tatiana Uklist
          </div>
        </Link>

        <nav className="hidden gap-1.5 md:flex">
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

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="callno flex items-center gap-2 border border-borderStrong px-3 py-2 uppercase tracking-[0.04em] text-ink md:hidden"
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-borderc px-5 py-2 sm:px-8 md:hidden">
          {NAV.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`callno border-b border-dashed border-borderDashed py-3 uppercase tracking-[0.04em] last:border-b-0 ${
                  active ? 'font-bold text-maroon' : 'font-normal text-tabInk'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
