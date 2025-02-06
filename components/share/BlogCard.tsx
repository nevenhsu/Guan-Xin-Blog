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
      <AspectRatio ratio={3 / 2}>
        <Box pos="relative">
          <SanityImage
            image={imageAsset}
            sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
            style={{
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
        </Box>
      </AspectRatio>

      <Group gap="xs">
        {_.map(data.categories, category => (
          <MyBadge key={category._id}>{category.title}</MyBadge>
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
  )
}
