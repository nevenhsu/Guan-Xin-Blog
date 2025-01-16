'use client'

import Image from 'next/image'
import { Stack, Space, Center, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import RwdLayout from '@/components/share/RwdLayout'
import { BlogCard } from '@/components/share/BlogCard'

const MySlide = Center.withProps({ h: '100%' })
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
      <Carousel withIndicators loop height="40vh">
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-0.png" alt="" objectFit="cover" fill />
            <MyTitle>Title 1</MyTitle>
          </MySlide>
        </Carousel.Slide>
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-1.png" alt="" objectFit="cover" fill />
            <MyTitle>Title 2</MyTitle>
          </MySlide>
        </Carousel.Slide>
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-2.png" alt="" objectFit="cover" fill />
            <MyTitle>Title 3</MyTitle>
          </MySlide>
        </Carousel.Slide>
        <Carousel.Slide>
          <MySlide>
            <Image src="/images/slide-3.png" alt="" objectFit="cover" fill />
            <MyTitle>Title 4</MyTitle>
          </MySlide>
        </Carousel.Slide>
      </Carousel>

      <Space h="xl" />

      <RwdLayout>
        <Stack gap="xl">
          <Title order={3}>Recent blog posts</Title>

          <BlogCard data={{ publishedAt: Date.now() }} />
          <BlogCard data={{}} />
        </Stack>
      </RwdLayout>
    </>
  )
}
