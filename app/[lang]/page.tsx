import { setRequestLocale } from 'next-intl/server'
import { draftMode } from 'next/headers'
import { getHomeData } from '@/sanity/queries'
import Home from '@/components/Home'

export default async function LocalePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  // Enable static rendering
  setRequestLocale(lang)

  const { isEnabled } = await draftMode()
  const data = isEnabled ? {} : await getHomeData()

  return <Home initialData={data} />
}
