'use client'

import * as _ from 'lodash-es'
import { Stack, Title, SimpleGrid, Space } from '@mantine/core'
import { MySlide } from './MySlide'
import RwdLayout from '@/components/share/RwdLayout'
import MyCarousel from '@/components/Carousel'
import { BlogCard } from '@/components/share/BlogCard'
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
      <MyCarousel
        duration={data.bannerDuration || 10}
        height="40vh"
        color="--mantine-color-white"
        mb={-24}
      >
        {_.map(bannerPages, page => (
          <MySlide key={page._id} data={page} />
        ))}
      </MyCarousel>

      <Space h="xl" />

      <RwdLayout>
        <Stack gap={40}>
          <Title order={3} fw={500}>
            {data.newsTitle || 'Latest news'}
          </Title>

          {newsPages ? (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40} verticalSpacing={40}>
              {_.map(newsPages, page => (
                <BlogCard key={page._id} data={page} />
              ))}
            </SimpleGrid>
          ) : null}

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
