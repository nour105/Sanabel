// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // لو المستخدم داخل على root فقط
  if (pathname === '/') {
    // Redirect افتراضي، هون عربي
    return NextResponse.redirect(new URL('/ar', req.url));
  }

  // خلي باقي الطلبات تمر عادي
  return NextResponse.next();
}

// تطبيق على جميع المسارات
export const config = {
  matcher: ['/'],
};
