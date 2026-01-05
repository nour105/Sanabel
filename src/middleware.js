// middleware.js (put it at the root of your project)

import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect root '/' to '/ar' by default
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ar', request.url));
  }

  // Let other paths continue
  return NextResponse.next();
}

// Specify which paths this middleware runs on
export const config = {
  matcher: ['/'], // runs only on the root
};
