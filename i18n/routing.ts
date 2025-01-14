import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { env } from '@/utils/env'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: env.locales,

  // Used when no locale matches
  defaultLocale: 'en',

  localePrefix: 'as-needed',

  // all pathnames that should be localized
  pathnames: {
    '/': '/',
  },
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
