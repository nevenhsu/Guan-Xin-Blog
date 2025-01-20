import type { SocialIconData } from './socialIcon'
import type { SanityArray } from './common'

export type FooterData = {
  title: string
  description: string
  email: string
  address: string
  phone: string
  links: SanityArray<SocialIconData>
}
