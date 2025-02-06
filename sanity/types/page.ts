import type { ImageAssetData } from './image'
import type { CategoryData } from './category'
import type { AvatarData } from './avatar'
import type { SanityArray, SanitySlug } from './common'
import type { Rwd } from './rwd'
import type { PortableTextBlock } from 'sanity'

export type PageData = SanitySlug & {
  hidden: boolean
  pageData: {
    title: string
    description: string
    content: SanityArray<PortableTextBlock>
  }
  mainImage: Rwd<{ asset: ImageAssetData }>
  categories: SanityArray<CategoryData>
  publishedAt: string | number
  readTime: number
  author?: { avatar: AvatarData }
}

export type PageMetadataQuery = Omit<PageData, 'content'>
