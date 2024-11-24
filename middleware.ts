import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Map English routes to their actual paths
const routeMap = {
  '/en': '/',
  '/en/apartments': '/leiligheter',
  '/en/location': '/beliggenhet',
  '/en/info': '/info'
} as const

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip if the request is for static files or API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/static/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if the pathname starts with /en
  const isEnglishPath = pathname.startsWith('/en')
  const locale = isEnglishPath ? 'en' : 'no'
  
  // If it's an English path, map it to the actual Norwegian route
  const actualPath = isEnglishPath ? (routeMap[pathname as keyof typeof routeMap] || pathname.replace(/^\/en/, '')) : pathname
  
  // Create response and set language in header
  const response = NextResponse.rewrite(new URL(actualPath, request.url))
  response.headers.set('x-lang', locale)
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next|api|static|.*\\..*).*)',
  ],
} 