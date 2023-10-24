import * as jose from 'jose';
import { NextResponse, NextRequest } from 'next/server';

export default async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value!;
  const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
  const decodedAccessToken = new TextEncoder().encode(ACCESS_TOKEN_SECRET);

  if (req.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/login', req.nextUrl));
  }

  try {
    await jose.jwtVerify(accessToken, decodedAccessToken);
    return NextResponse.next();
  } catch (error: any) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};
