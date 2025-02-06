'use client'

import * as _ from 'lodash-es'
import { Stack, Space, Title, Divider, SimpleGrid } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { MySlide } from './MySlide'
import RwdLayout from '@/components/share/RwdLayout'
import { BlogCard } from '@/components/share/BlogCard'
import { AlbumCover } from './AlbumCover'
import useQuery from '@/sanity/hooks/useQuery'
import { homeQuery } from '@/sanity/queries'
import type { HomeData } from '@/sanity/types/home'

type HomeProps = {
  initialData: Partial<HomeData>
}

export default function Home({ initialData }: HomeProps) {
  const [data] = useQuery<Partial<HomeData>>(initialData, homeQuery)

  const { bannerPages, newsPages } = data
  const hasMultiBanners = (bannerPages?.length || 0) > 1

  return (
    <>
      <Carousel withIndicators={hasMultiBanners} withControls={hasMultiBanners} loop height="40vh">
        {_.map(bannerPages, page => (
          <Carousel.Slide key={page._id}>
            <MySlide data={page} />
          </Carousel.Slide>
        ))}
      </Carousel>

      <Space h="xl" />

      <RwdLayout>
        <Stack gap={40}>
          <Title order={2} fw={400}>
            {data.newsTitle || 'Latest news'}
          </Title>

          {newsPages ? (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40} verticalSpacing={40}>
              {_.map(newsPages, page => (
                <BlogCard key={page._id} data={page} />
              ))}
            </SimpleGrid>
          ) : null}

          <Divider />

          {/* <Carousel
            withIndicators
            loop
            styles={{
              indicators: {
                bottom: -20,
              },
              indicator: {
                backgroundColor: 'var(--mantine-color-dark-6)',
              },
            }}
          >
            <Carousel.Slide>
              <AlbumCover />
            </Carousel.Slide>
      
          </Carousel> */}
        </Stack>
      </RwdLayout>
    </>
  )
}
