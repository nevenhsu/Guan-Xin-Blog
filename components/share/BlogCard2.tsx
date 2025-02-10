'use client'

import * as _ from 'lodash-es'
import { Link } from '@/i18n/routing'
import { Box, Grid, Stack, Group, Title, Text, ThemeIcon } from '@mantine/core'
import MyAvatar from '@/components/sanity/MyAvatar'
import SanityImage from '@/components/sanity/Image'
import { BlogInfo } from './BlogInfo'
import { MyBadge } from './MyBadge'
import { useScreenQueryValue } from '@/sanity/hooks/useScreenQuery'
import { PiArrowUpRight } from 'react-icons/pi'
import type { PageData } from '@/sanity/types/page'

export function BlogCard2({ data }: { data: Partial<PageData> }) {
  const { mainImage, pageData, author, slug } = data
  const imageAsset = useScreenQueryValue(mainImage, 'asset')

  return (
    <Link
      href={{
        pathname: `/page/[slug]`,
        params: { slug: slug?.current || '' },
      }}
    >
      <Grid columns={6} gutter={0}>
        <Grid.Col span={4}>
          <Stack pr={{ base: 24, sm: 40 }}>
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
        </Grid.Col>

        <Grid.Col span={2}>
          <Box pos="relative" h="100%">
            <SanityImage
              image={imageAsset}
              w={576}
              sizes="20vw"
              style={{
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Link>
  )
}
