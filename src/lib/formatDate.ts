
// src/lib/formatDate.ts
export function isValidDateString(value?: string): boolean {
  if (!value || typeof value !== 'string') return false;
  const d = new Date(value);
  return !Number.isNaN(d.getTime());
}

export function formatPublishOrUpdatedDate(
  doc: { publishDate?: string; _updatedAt?: string }
): string {
  const preferred = isValidDateString(doc.publishDate) ? doc.publishDate! : doc._updatedAt;
  if (!preferred || !isValidDateString(preferred)) return '—';
  return new Date(preferred).toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}