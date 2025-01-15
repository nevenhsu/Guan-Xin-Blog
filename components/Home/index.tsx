'use client'

import Image from 'next/image'
import { Center, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import classes from './index.module.css'

const MySlide = Center.withProps({ h: '100%', className: classes.slide })
const MyTitle = Title.withProps({
  px: 60,
  style: {
    zIndex: 1,
    color: 'var(--mantine-color-white)',
    textShadow: '2px 2px 1px rgba(0, 0, 0, 0.50)',
    textAlign: 'center',
  },
})

export default function Home() {
  return (
    <>
      <Carousel withIndicators loop height={400}>
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-0.png" alt="" fill />
            <MyTitle>Title 1</MyTitle>
          </MySlide>
        </Carousel.Slide>
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-1.png" alt="" fill />
            <MyTitle>Title 2</MyTitle>
          </MySlide>
        </Carousel.Slide>
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-2.png" alt="" fill />
            <MyTitle>Title 3</MyTitle>
          </MySlide>
        </Carousel.Slide>
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-3.png" alt="" fill />
            <MyTitle>Title 4</MyTitle>
          </MySlide>
        </Carousel.Slide>
      </Carousel>
    </>
  )
}
