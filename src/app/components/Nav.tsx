
// app/(site)/nav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/studio', label: 'Studio' },
  { href: '/generate', label: 'Preview' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className='w-full'>
      <ul className="flex gap-3 align-items-center justify-between w-full">
        <div className="flex gap-3">
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
                    'px-3 py-2 rounded-md text-sm font-medium',
                    'text-gray-900 dark:text-white',
                    'hover:text-gray-700 dark:hover:text-gray-300',
                    'active:text-gray-800 dark:active:text-gray-200',
                    'hover:underline',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'focus-visible:ring-gray-400 dark:focus-visible:ring-gray-500',
                    'focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900' )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </div>
        <li className="ml-auto">
          <Link
            href="/guide"
            className={clsx(
              'px-4 py-2 rounded-md text-sm font-medium',
              'bg-blue-600 text-white',
              'hover:bg-blue-700',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              'focus-visible:ring-blue-500',
              pathname === '/guide' && 'ring-2 ring-blue-500'
            )}
          >
            Guide
          </Link>
        </li>
      </ul>
    </nav>
  );
}
