import * as _ from 'lodash-es'
import { AspectRatio, Stack, Group, Box, Title, Text, ThemeIcon } from '@mantine/core'
import MyAvatar from '@/components/sanity/MyAvatar'
import { BlogInfo } from './BlogInfo'
import { MyBadge } from './MyBadge'
import SanityImage from '@/components/sanity/Image'
import { useScreenQueryValue } from '@/sanity/hooks/useScreenQuery'
import { PiArrowUpRight } from 'react-icons/pi'
import type { PageData } from '@/sanity/types/page'

export function BlogCard({ data }: { data: Partial<PageData> }) {
  const { mainImage, pageData, author } = data
  const imageAsset = useScreenQueryValue(mainImage, 'asset')

  return (
    <Stack className="c-pointer">
      <AspectRatio pos="relative" ratio={3 / 2}>
        <SanityImage image={imageAsset} />
      </AspectRatio>

      <Group gap="xs">
        {_.map(data.categories, category => (
          <MyBadge key={category._id}>{category.title}</MyBadge>
        ))}
      </Group>

      <Stack gap="xs">
        <Group justify="space-between" align="start" wrap="nowrap">
          <Title order={3}>{pageData?.title}</Title>
          <ThemeIcon variant="transparent">
            <PiArrowUpRight size={20} />
          </ThemeIcon>
        </Group>

        <Text c="dimmed" mb="xs" lineClamp={3}>
          {pageData?.description}
        </Text>

        <Group justify="space-between" wrap="nowrap">
          <MyAvatar data={author?.avatar} />

          <BlogInfo data={data} />
        </Group>
      </Stack>
    </Stack>
  )
}
