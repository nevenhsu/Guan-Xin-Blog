'use client'

import * as _ from 'lodash-es'
import { Link } from '@/i18n/routing'
import { AspectRatio, Stack, Group, Box, Title, Text, ThemeIcon } from '@mantine/core'
import MyAvatar from '@/components/sanity/MyAvatar'
import SanityImage from '@/components/sanity/Image'
import { BlogInfo } from './BlogInfo'
import { MyBadge } from './MyBadge'
import { useScreenQueryValue } from '@/sanity/hooks/useScreenQuery'
import { PiArrowUpRight } from 'react-icons/pi'
import type { PageData } from '@/sanity/types/page'

export function BlogCard({ data }: { data: Partial<PageData> }) {
  const { mainImage, pageData, author, slug } = data
  const imageAsset = useScreenQueryValue(mainImage, 'asset')

  return (
    <Link
      href={{
        pathname: `/page/[slug]`,
        params: { slug: slug?.current || '' },
      }}
    >
      <Stack h="100%">
        <AspectRatio ratio={3 / 2}>
          <Box pos="relative">
            <SanityImage
              image={imageAsset}
              w={576}
              sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
              style={{
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
          </Box>
        </AspectRatio>

        <Group gap="xs">
          {_.map(data.categories, data => (
            <MyBadge key={data._id} color={data.color}>
              {data.title}
            </MyBadge>
          ))}
        </Group>

        <Stack gap="xs" h="100%">
          <Group justify="space-between" align="start" wrap="nowrap">
            <Title order={3}>{pageData?.title}</Title>
            <ThemeIcon variant="transparent">
              <PiArrowUpRight size={20} />
            </ThemeIcon>
          </Group>

          <Text c="dimmed" mb="xs" lineClamp={3}>
            {pageData?.description}
          </Text>

          <Box style={{ flexGrow: 1 }} />

          <Group justify="space-between" wrap="nowrap">
            <MyAvatar data={author?.avatar} />

            <BlogInfo data={data} />
          </Group>
        </Stack>
      </Stack>
    </Link>
  )
}
