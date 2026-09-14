// middleware.js

import { NextResponse } from 'next/server';

const locales = ['ar', 'en'];
const defaultLocale = 'ar';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Redirect root "/" to Arabic
    if (pathname === '/') {
        return NextResponse.redirect(
            new URL('/ar', request.url)
        );
    }

    // Redirect QR / old contact link
    if (pathname === '/get-in-touch') {
        return NextResponse.redirect(
            new URL('/ar/get-in-touch', request.url)
        );
    }

    // If URL already contains a supported language,
    // let Next.js handle it normally.
    const hasLocale = locales.some(
        (locale) =>
            pathname === `/${locale}` ||
            pathname.startsWith(`/${locale}/`)
    );

    if (hasLocale) {
        return NextResponse.next();
    }

    // Other routes without locale → default to Arabic
    return NextResponse.redirect(
        new URL(`/${defaultLocale}${pathname}`, request.url)
    );
}

export const config = {
    matcher: [
        /*
         * Run middleware on all routes except:
         * - Next.js internal files
         * - static files
         * - API routes
         */
        '/((?!_next|api|favicon.ico|.*\\..*).*)',
    ],
};