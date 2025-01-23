import type { PageData } from './page'
import type { SanityArray } from './common'

type PageReference = Omit<PageData, 'content'>

export type HomeData = {
  title: string
  bannerPages: SanityArray<PageReference>
  bannerDuration: number
  newsTitle: string
  newsPages: SanityArray<PageReference>
}
