
import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900 pt-16">
      <div className="mx-auto max-w-5xl px-10 py-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome to the<br />UTKFS Email Builder
          </h1><br />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Use the <span className="font-semibold">Studio</span> to build emails from existing email templates.<br />
            Then
            <span className="font-semibold"> Generate</span> and download or copy HTML for your newsletter blast.
          </p>
          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <article className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Studio</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Visually compose your email template content by email type using drag and drop sections. <br />Publish or save as drafts.
              </p>
              <div className="mt-4">
               <Link
                  href="/studio"
                  className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors" >
                  Create New
                </Link>
               </div>
              </article>
              <article className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Preview HTML</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  View a list of emails by content type, then preview in browser and copy or download the HTML for quick sends via your service of choice.
                </p>
                <div className="mt-4">
                  <Link
                    href="/generate"
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors" >
                   Preview HTML
                  </Link>
               </div>
              </article>
          </div>
        </div>
      </div >
    </section >
  )
}