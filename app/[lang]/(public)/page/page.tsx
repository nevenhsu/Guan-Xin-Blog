import { setRequestLocale } from 'next-intl/server'
import { draftMode } from 'next/headers'
import { getPagesData } from '@/sanity/queries'
import PageList from '@/components/PageList'

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { lang } = await params

  // Enable static rendering
  setRequestLocale(lang)

  const _searchParams = await searchParams
  const limit = Number(_searchParams.limit) || 10
  const page = Number(_searchParams.page) || 0
  const start = page * limit

  const { isEnabled } = await draftMode()
  const data = isEnabled ? [] : await getPagesData(start, limit)

  return <PageList initialData={data} page={page} start={start} limit={limit} />
}
