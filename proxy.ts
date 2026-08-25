import { NextRequest, NextResponse } from 'next/server';
import { categoryToSlug } from './app/site';

const APEX_HOST = 'aisneer.com';
const CANONICAL_ORIGIN = 'https://www.aisneer.com';

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = (request.headers.get('host') ?? '').split(':')[0].toLowerCase();

  if (hostname === APEX_HOST) {
    const dest = new URL(`${url.pathname}${url.search}`, CANONICAL_ORIGIN);
    return NextResponse.redirect(dest, 301);
  }

  if (url.pathname === '/laptops/dell-xp-13-9348') {
    const dest = url.clone();
    dest.pathname = '/laptops/dell-xps-13-9348';
    dest.search = '';
    return NextResponse.redirect(dest, 301);
  }

  if (url.pathname === '/laptops') {
    const category = url.searchParams.get('category');
    if (category) {
      const dest = url.clone();
      dest.pathname = `/laptops/category/${categoryToSlug(category)}`;
      dest.search = '';
      return NextResponse.redirect(dest, 301);
    }
    if (url.searchParams.size > 0) {
      const dest = url.clone();
      dest.search = '';
      return NextResponse.redirect(dest, 301);
    }
  }

  if (url.pathname === '/usb-hubs' && url.searchParams.size > 0) {
    const dest = url.clone();
    dest.search = '';
    return NextResponse.redirect(dest, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)']
};
