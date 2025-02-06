'use client'

import { useState, useEffect } from 'react'
import { getImageData } from '@/sanity/queries'
import Image, { ImageProps } from 'next/image'
import type { ImageData, ImageAssetData } from '@/sanity/types/image'

export type SanityImageProps = {
  image?: ImageAssetData
  alt?: string
} & Omit<ImageProps, 'src' | 'width' | 'height' | 'loader' | 'placeholder' | 'blurDataURL' | 'alt'>

export default function SanityImage({ image, style, alt, ...rest }: SanityImageProps) {
  const { lqip, _ref } = image || {}
  const [img, setImg] = useState<ImageData>()

  useEffect(() => {
    if (_ref && !lqip) {
      getImageData(_ref).then(res => {
        setImg(res)
      })
    }
  }, [_ref, lqip])

  return (
    <Image
      {...rest}
      src={image?.url || '/images/blank.png'}
      style={{ objectFit: 'cover', ...style }}
      placeholder="blur"
      blurDataURL={lqip || img?.metadata.lqip || ' '}
      alt={alt || ''}
      fill
    />
  )
}
