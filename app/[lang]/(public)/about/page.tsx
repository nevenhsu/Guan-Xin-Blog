import { draftMode } from 'next/headers'
import { setRequestLocale } from 'next-intl/server'
import About from '@/components/About'
import { getAboutData } from '@/sanity/queries'

export default async function LocalePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  // Enable static rendering
  setRequestLocale(lang)

  const { isEnabled } = await draftMode()
  const data = isEnabled ? {} : await getAboutData()

  return <About initialData={data} />
}
