
// src/app/generate/page.tsx
import Link from 'next/link';
import { getSchemaTypes, getLatestByType } from '@/lib/getIssue';
import { formatPublishOrUpdatedDate, isValidDateString } from '@/lib/formatDate';

export const revalidate = 60;

const ALLOWED_TYPES = ['newsletterIssue', 'newsletterTraining', 'pressRelease'] as const;
type AllowedType = typeof ALLOWED_TYPES[number];
const SHOW_FIELDS_FOR = new Set<AllowedType>(['newsletterIssue', 'newsletterTraining']);

const TYPE_LABELS: Record<string, string> = {
  newsletterIssue: 'FS Newsletter',
  newsletterTraining: 'Training Newsletter',
  pressRelease: 'Press Release',
};

type Doc = {
  _id: string;
  _updatedAt?: string;
  title?: string;
  issueNumber?: number;
  publishDate?: string;
  status?: string;
};

export default async function GenerateIndexPage() {
  const types = ALLOWED_TYPES ?? (await getSchemaTypes());
  const visible = (ALLOWED_TYPES ?? types).filter(
    (t) => !t.startsWith('sanity.') && !t.startsWith('system.')
  );

  const perType = await Promise.all(
    visible.map(async (type) => ({ type, items: await getLatestByType(type, 9) }))
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 mt-24">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Preview HTML from recent content types
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Pick from an email template type, then click <strong>Preview</strong>.
        </p>
      </header>

      <section className="mt-10 space-y-10">
        {perType.map(({ type, items }) => (
          <div key={type}>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-8">{TYPE_LABELS[type] ?? type}</h2>

            {items.length === 0 ? (
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                No recent content for this type.
              </p>
            ) : (
              <>
              <ul className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((doc: Doc) => {
                 
                  const title = doc.title ?? `Issue #${doc.issueNumber ?? '—'}`;
                  
                  const showPublishMeta = SHOW_FIELDS_FOR.has(type as AllowedType);
                  const hasValidPublishDate = isValidDateString(doc.publishDate);
                  const formatted = formatPublishOrUpdatedDate(doc);

                  return (
                    <li
                      key={doc._id}
                      className="rounded-xl mb-8 border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow dark:border-slate-800 dark:bg-slate-900"
                    >

                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                          {title}<br/>{formatted && formatted}
                        </h3>

                        {/* Status flag only for newsletterIssue/newsletterTraining */}
                        {showPublishMeta && 
                           <span
                              className={`inline-flex items-center rounded-md px-3 py-0.5 text-xs font-medium ring-1 ring-gray-200 bg-gray-200 text-gray-700`}
                              aria-label={`Status: ${doc.status}`}
                              title={`Status: ${doc.status}`}
                            >
                              {doc.status}
                            </span>
                        }
                      </div>

                      {/* Publish/Updated date */}                
                      {showPublishMeta ? (
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                          {hasValidPublishDate ? (
                            <>Publish date: {formatted}</>
                          ) : (
                            <>Updated: {formatted}</>
                          )}
                        </p>
                      ) : (
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                          Updated: {new Date(doc._updatedAt ?? Date.now()).toLocaleString()}
                        </p>
                      )}

                      <div className="mt-4">
                        <Link
                          href={`/generate/${encodeURIComponent(doc._id)}`}
                          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors"
                        >
                          Preview
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {items.length >= 9 && (
                <div className="mb-12">
                  <Link
                    href={`/generate/by-type/${encodeURIComponent(type)}`}
                    className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    View all {TYPE_LABELS[type] ?? type}
                  </Link>
                </div>
              )}
              </>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
