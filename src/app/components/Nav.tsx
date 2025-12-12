
// app/(site)/nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/studio', label: 'Studio' },
  { href: '/generate', label: 'Generate' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex gap-3 align-items-center">
        {links.map((l) => {
          const active =
            l.href === '/'
              ? pathname === '/'
              : pathname === l.href || pathname.startsWith(l.href + '/');

          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-400 active:gray-400 hover:underline'
                )}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
