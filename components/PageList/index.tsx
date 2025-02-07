'use client'

import _ from 'lodash'
import { useRouter } from '@/i18n/routing'
import { useSearchParams } from 'next/navigation'
import { Stack, Divider, Group, Box, Button, Text, Space } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import useQuery from '@/sanity/hooks/useQuery'
import { pagesQuery } from '@/sanity/queries'
import { BlogCard } from '@/components/share/BlogCard'
import { BlogCard2 } from '@/components/share/BlogCard2'
import RwdLayout from '@/components/share/RwdLayout'
import { PiArrowLeft, PiArrowRight, PiTrafficCone } from 'react-icons/pi'
import type { PageData } from '@/sanity/types/page'
import classes from './index.module.css'

type BlogListProps = {
  initialData: Array<PageData>
  page: number
  start: number
  limit: number
}

const PageButton = Button.withProps({
  className: classes.button,
  color: 'gray',
  variant: 'outline',
  px: 'lg',
  py: 'sm',
  h: '100%',
})

export default function PageList({ initialData, page, start, limit }: BlogListProps) {
  const [data] = useQuery<Array<PageData>>(initialData, pagesQuery(start, 10))
  const matches = useMediaQuery('(min-width: 36em)')

  const router = useRouter()
  const searchParams = useSearchParams()

  const noData = !data.length
  const noPrev = page == 0
  const noNext = data.length < limit

  const handlePage = (newPage: number) => {
    router.push({
      pathname: '/page',
      query: { ...Object.fromEntries(searchParams.entries()), page: newPage },
    })
  }

  return (
    <>
      <Stack gap="xl">
        <RwdLayout w={{ base: '100%', lg: 992 }} mx="auto">
          {noData ? (
            <Stack py={40} gap="xl" align="center">
              <Group justify="center">
                <PiTrafficCone size={24} />
                <Text>沒有更多文章</Text>
              </Group>
              <Box>
                <Button
                  variant="outline"
                  onClick={() => {
                    router.push({
                      pathname: '/page',
                      query: { ...Object.fromEntries(searchParams.entries()), page: 0 },
                    })
                  }}
                >
                  返回第一頁
                </Button>
              </Box>
            </Stack>
          ) : (
            <Stack gap={64}>
              {_.map(data, (page, i) =>
                matches ? (
                  <BlogCard2 key={page._id} data={page} />
                ) : (
                  <BlogCard key={page._id} data={page} />
                )
              )}
            </Stack>
          )}
        </RwdLayout>

        <Group justify="center" wrap="nowrap">
          <PageButton onClick={() => handlePage(page - 1)} disabled={noPrev}>
            <Group justify="space-between" c={noPrev ? '' : 'dark'} wrap="nowrap">
              <PiArrowLeft size={20} />
              <Space w={{ base: 24, xs: 80 }} />
              <Stack gap={4} ta="right">
                <Text fz="lg">上一頁</Text>
                <Text fz="sm" c={noPrev ? '' : 'dimmed'}>
                  Previous
                </Text>
              </Stack>
            </Group>
          </PageButton>

          <PageButton onClick={() => handlePage(page + 1)} disabled={noNext}>
            <Group justify="space-between" c={noNext ? '' : 'dark'} wrap="nowrap">
              <Stack gap={4} ta="left">
                <Text fz="lg">下一頁</Text>
                <Text fz="sm" c={noNext ? '' : 'dimmed'}>
                  Next
                </Text>
              </Stack>
              <Space w={{ base: 24, xs: 80 }} />
              <PiArrowRight size={20} />
            </Group>
          </PageButton>
        </Group>

        <Divider />
      </Stack>
    </>
  )
}
