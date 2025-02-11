'use client'

import { useState, useEffect, Children } from 'react'
import { Box } from '@mantine/core'
import { Carousel, type Embla } from '@mantine/carousel'
import Indicators from './Indicators'
import type { CarouselProps } from '@mantine/carousel'

export default function MyCarousel({
  children,
  color = '--mantine-color-text',
  duration = 10,
  ...rest
}: CarouselProps & { duration?: number; color?: string }) {
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [embla, setEmbla] = useState<Embla>()

  const items = Children.toArray(children)
  const hasMultiItems = items.length > 1
  const paused = count % 2 != 0

  const handleSelected = () => {
    setSelectedIndex(embla!.selectedScrollSnap())
    if (!paused) {
      setCount(0)
    }
  }

  useEffect(() => {
    if (embla) {
      embla.on('select', handleSelected)
    }
  }, [embla])

  return (
    <Box onClick={() => setCount(prev => prev + 1)}>
      <Carousel mb="xl" withControls={hasMultiItems} loop {...rest} getEmblaApi={setEmbla}>
        {items.map((child, i) => (
          <Carousel.Slide key={`Carousel-${i}`}>{child}</Carousel.Slide>
        ))}
      </Carousel>
      {hasMultiItems ? (
        <Indicators
          num={items.length}
          selectedIndex={selectedIndex}
          duration={duration}
          color={color}
          paused={paused}
          embla={embla}
        />
      ) : null}
    </Box>
  )
}
