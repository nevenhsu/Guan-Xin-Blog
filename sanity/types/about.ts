import type { PortableTextBlock } from 'sanity'
import type { ImageAssetData } from './image'
import type { MemberData } from './member'
import type { SanityArray } from './common'

export type AboutData = {
  title: string
  subtitle: string
  mainImage: {
    asset: ImageAssetData
  }
  body: PortableTextBlock[]
  memberTitle: string
  memberDuration: number
  members: SanityArray<MemberData>
}
