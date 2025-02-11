'use client'

import { Link } from '@/i18n/routing'
import { Center, Stack, Title, Box, Button } from '@mantine/core'
import SanityImage from '@/components/sanity/Image'
import { useScreenQueryValue } from '@/sanity/hooks/useScreenQuery'
import type { PageData } from '@/sanity/types/page'

type MySlideProps = {
  data: Omit<PageData, 'content'>
}

export function MySlide({ data }: MySlideProps) {
  const { mainImage, slug } = data
  const imageAsset = useScreenQueryValue(mainImage, 'asset')

  return (
    <Link
      href={{
        pathname: `/page/[slug]`,
        params: { slug: slug?.current || '' },
      }}
    >
      <Center pos="relative" h="100%">
        <SanityImage image={imageAsset} w={1024} />

        <Stack justify="center" gap="xl">
          <Title
            px={60}
            order={2}
            style={{
              zIndex: 1,
              color: 'var(--mantine-color-white)',
              textShadow: '2px 2px 1px rgba(0, 0, 0, 0.50)',
              textAlign: 'center',
            }}
          >
            {data.pageData.title}
          </Title>

          <Box ta="center">
            <Button variant="outline" color="white">
              前往文章
            </Button>
          </Box>
        </Stack>
      </Center>
    </Link>
  )
}
