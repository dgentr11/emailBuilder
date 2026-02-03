import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'app-auth';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  const url = new URL(request.url);
  return NextResponse.redirect(new URL('/login', url.origin));
}
