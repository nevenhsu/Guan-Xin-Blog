import { Group, Text } from '@mantine/core'
import { formatZonedDate } from '@/utils/helper'
import type { PageData } from '@/sanity/types/page'

export function BlogInfo({ data }: { data: Partial<PageData> }) {
  const { publishedAt, readTime } = data
  if (!publishedAt && !readTime) return null

  return (
    <>
      <Group c="dimmed" gap={8}>
        {publishedAt ? (
          <>
            <Text fz="sm">{formatZonedDate(publishedAt)}</Text>
          </>
        ) : null}
        {readTime ? (
          <>
            <Text fz="sm">·</Text>
            <Text fz="sm">{`${readTime} min read`}</Text>
          </>
        ) : null}
      </Group>
    </>
  )
}
