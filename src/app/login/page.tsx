'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function LoginForm() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/';
  const errorParam = searchParams.get('error');
  const [error, setError] = useState<string | null>(errorParam);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, from }),
        credentials: 'same-origin',
      });
      const data = await res.json();
      if (data.ok) {
        window.location.href = data.redirect || from;
        return;
      }
      setError(data.error === 'config' ? 'config' : 'invalid');
    } catch {
      setError('invalid');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-sm px-6 py-16">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
          Sign in
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Enter the shared password to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            disabled={loading}
            autoComplete="current-password"
            placeholder="Password"
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-60 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
          />
          {(error === 'invalid' || errorParam === 'invalid') && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              Invalid password. Please try again.
            </p>
          )}
          {(error === 'config' || errorParam === 'config') && (
            <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
              Authentication is not configured. Contact your administrator.
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 dark:focus:ring-offset-slate-900"
          >
            {loading ? 'Signing in…' : 'Sign in'}
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
