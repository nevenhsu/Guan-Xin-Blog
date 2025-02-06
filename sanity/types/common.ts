export type SanityArray<T> = Array<T & { _id: string; _key: string }>

export type SanityReference = { _ref: string }

export type SanitySlug = { slug: { current: string } }
