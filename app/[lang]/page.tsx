import { setRequestLocale } from 'next-intl/server'
import Home from '@/components/Home'

export default async function LocalePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  // Enable static rendering
  setRequestLocale(lang)

  return <Home />
}
