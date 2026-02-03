import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAuthToken } from '@/lib/auth';

const COOKIE_NAME = 'app-auth';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 28; // 4 weeks

export async function POST(request: NextRequest) {
  let submitted = '';
  let from = request.nextUrl.searchParams.get('from') || '/';

  const contentType = request.headers.get('content-type') ?? '';
  if (contentType.includes('application/json')) {
    const body = await request.json();
    submitted = body?.password ?? '';
    from = body?.from ?? from;
  } else {
    const formData = await request.formData();
    submitted = (formData.get('password') as string | null) ?? '';
    from = (formData.get('from') as string | null) ?? from;
  }

  const expected = process.env.APP_PASSWORD;
  const isJson = contentType.includes('application/json');

  if (!expected) {
    if (isJson) return NextResponse.json({ ok: false, error: 'config' }, { status: 500 });
    return NextResponse.redirect(
      new URL('/login?error=config&from=' + encodeURIComponent(from), request.url)
    );
  }

  if (submitted !== expected) {
    if (isJson) return NextResponse.json({ ok: false, error: 'invalid' }, { status: 401 });
    return NextResponse.redirect(
      new URL('/login?error=invalid&from=' + encodeURIComponent(from), request.url)
    );
  }

  const token = await getAuthToken(expected);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: COOKIE_MAX_AGE,
  });

  if (isJson) return NextResponse.json({ ok: true, redirect: from });
  return NextResponse.redirect(new URL(from, request.url));
}
