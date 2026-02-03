'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'creating-new-document', label: 'Create an Email' },
  { id: 'duplicating', label: 'Duplicate an Email' },
  { id: 'internal-fields', label: 'Internal Fields Explained' },
  { id: 'adding-sections', label: 'Adding Sections' },
  { id: 'section-types', label: 'Section Types' },
  { id: 'general-best-practices', label: 'General Best Practices' },
  { id: 'outlook-setup', label: 'Outlook Setup for Sending' },
];

export function GuideSidebar() {
  const [activeId, setActiveId] = useState<string | null>('overview');

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportThreshold = scrollY + window.innerHeight / 3;
      let current: string | null = null;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= viewportThreshold) current = id;
      }
      setActiveId(current ?? SECTIONS[0].id);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        el.scrollIntoView({ block: 'start' });
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 112;
        const startY = window.scrollY;
        const diff = y - startY;
        const duration = 150;
        const start = performance.now();
        const step = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - progress) ** 2;
          window.scrollTo(0, startY + diff * eased);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Guide sections"
      className="sticky top-24 self-start w-[250px] shrink-0 hidden lg:block"
    >
      <div className="space-y-1 pr-4">
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={`block py-1.5 px-2 text-sm rounded-md transition-colors ${
              activeId === id
                ? 'font-medium text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
