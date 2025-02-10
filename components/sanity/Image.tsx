'use client'

import { useState, useEffect } from 'react'
import { getImageData } from '@/sanity/queries'
import { urlFor } from '@/sanity/lib/imageUrlBuilder'
import Image, { ImageProps } from 'next/image'
import type { ImageAssetData } from '@/sanity/types/image'

export type SanityImageProps = {
  image?: ImageAssetData
  w?: number
  alt?: string
} & Omit<ImageProps, 'src' | 'width' | 'height' | 'loader' | 'placeholder' | 'blurDataURL' | 'alt'>

type ImageState = Omit<ImageAssetData, '_ref'>

export default function SanityImage({ image, style, w, alt, ...rest }: SanityImageProps) {
  const { _ref, lqip } = image || {}
  const [img, setImg] = useState<ImageState | undefined>(image)

  useEffect(() => {
    if (_ref && !lqip) {
      getImageData(_ref).then(res => {
        setImg({
          url: res?.url,
          lqip: res?.metadata.lqip,
          dimensions: res?.metadata.dimensions,
          mimeType: res?.mimeType,
        })
      })
    }
  }, [_ref, lqip])

  return (
    <Image
      fill
      sizes="100vw"
      {...rest}
      src={getImageUrl(img, w)}
      style={{ objectFit: 'cover', ...style }}
      placeholder="blur"
      blurDataURL={img?.lqip || ' '}
      alt={alt || ''}
    />
  )
}

function getImageUrl(url?: ImageState, w?: number) {
  if (!url) return '/images/blank.png'

  const img = urlFor(url).auto('format').fit('max')

  return w ? img.width(w).url() : img.url()
}
