import { NextResponse, type NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

export default async function middleware(req: NextRequest) {
  // next-intl
  return intlMiddleware(req)
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/_next`, `/_vercel` or '/studio'
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!studio|_next|_vercel|.*\\..*).*)',
  ],
}
