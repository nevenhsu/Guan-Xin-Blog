'use client'

import _ from 'lodash'
import useQuery from '@/sanity/hooks/useQuery'
import { useAppContext } from '@/store/AppContext'
import { pagesQuery } from '@/sanity/queries'
import { Box, Stack } from '@mantine/core'
// import { BlogCard } from '@/components/BlogCard'
// import PostCard from '@/components/PostCard'
import RwdLayout from '@/components/sanity/Rwd/Layout'
import classes from './index.module.css'
import type { PageData } from '@/sanity/types/page'

type BlogListProps = {
  initialData: Array<PageData>
}

export default function BlogList({ initialData }: BlogListProps) {
  const [data] = useQuery<Array<PageData>>(initialData, pagesQuery)

  const {
    state: { viewportSize },
  } = useAppContext()

  const isMobile = viewportSize.width < 576

  return (
    <RwdLayout w={{ base: '100%', lg: 992 }}>
      {/*  Pattern Background   */}
      <Box
        className={classes.fixed}
        style={{
          background: `url('/images/dots.png') repeat`,
          backgroundSize: '64px',
          opacity: 0.1,
        }}
      />

      <Box h={40} />

      <Stack gap={24}>
        {_.map(data, (post, i) => (
          <>
            {/* {isMobile ? (
              <PostCard key={post.slug.current} data={post} />
            ) : (
              <BlogCard key={post.slug.current} data={post} />
            )} */}
          </>
        ))}
      </Stack>

      <Box h={{ base: 60, sm: 100 }} />
    </RwdLayout>
  )
}
