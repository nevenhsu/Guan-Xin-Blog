import { Group } from '@mantine/core'
import { Caption } from '@/components/Fonts'
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
            <Caption>{formatZonedDate(publishedAt)}</Caption>
          </>
        ) : null}
        {readTime ? (
          <>
            <Caption>·</Caption>
            <Caption>{`${readTime} min read`}</Caption>
          </>
        ) : null}
      </Group>
    </>
  )
}
