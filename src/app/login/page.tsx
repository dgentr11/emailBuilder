'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginForm() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';
  const error = searchParams.get('error');

  return (
    <div className="mx-auto max-w-sm px-6 py-16">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          Sign in
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Enter the shared password to continue.
        </p>
        <form action="/api/auth" method="POST">
          <input type="hidden" name="from" value={from} />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="Password"
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
          />
          {error === 'invalid' && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              Invalid password. Please try again.
            </p>
          )}
          {error === 'config' && (
            <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
              Authentication is not configured. Contact your administrator.
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <LoginForm />
    </Suspense>
  );
}
