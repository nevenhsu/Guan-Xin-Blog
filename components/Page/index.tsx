'use client'

import * as _ from 'lodash-es'
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useRwdValue } from '@/hooks/useRwdValue'
import { motion } from 'framer-motion'
import { MotionSlide, MotionBlur } from '@/components/motion'
import { MyPortableText } from '@/components/common'
import { Box, Group, Stack, Divider } from '@mantine/core'
import { Headline, Body } from '@/components/Fonts'
import { BlogInfo } from '@/components/share/BlogInfo'
import RwdLayout from '@/components/share/RwdLayout'
import SanityImage from '@/components/sanity/Image'
import MyAvatar from '@/components/sanity/MyAvatar'
import useQuery from '@/sanity/hooks/useQuery'
import { pageQuery } from '@/sanity/queries'
import { variables } from '@/theme/cssVariables'
import type { PageData } from '@/sanity/types/page'
import classes from './index.module.css'

const headerHeight = variables.header.height

type PageProps = {
  slug: string
  initialData: Partial<PageData>
}

export default function Blog({ slug, initialData }: PageProps) {
  const [data] = useQuery<Partial<PageData>>(initialData, pageQuery, { slug })
  const { pageData, mainImage, author } = data
  const { title, description, content } = pageData || {}
  const { avatar } = author || {}

  const show = !_.isEmpty(data)
  const [isInit, setInit] = useState(false)
  const imageAsset = useRwdValue(mainImage, 'asset')

  useEffect(() => {
    if (show) {
      setInit(true)
    }
  }, [show])

  if (!show) return null

  return (
    <>
      {imageAsset ? (
        <Box pos="relative" h="40vh" style={{ pointerEvents: 'none' }}>
          {/*   Background   */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Box
              className={clsx('absolute-horizontal', classes.bg, { hide: !title })}
              top={`-${headerHeight}px`}
              h={`calc(100% + ${headerHeight}px)`}
              w="100vw"
            >
              {/*   Cover   */}
              <Box className={clsx('absolute-center', classes.cover)}>
                <MotionBlur delay={1}>
                  <Box>
                    <SanityImage image={imageAsset} w={1440} style={{ height: '100%' }} />
                  </Box>
                </MotionBlur>
              </Box>
            </Box>
          </motion.div>
        </Box>
      ) : null}

      {/*   Title   */}

      <RwdLayout>
        <Stack gap={40}>
          <MotionSlide delay={1}>
            <Stack gap="xl">
              <Group justify="space-between">
                {avatar ? <MyAvatar data={avatar} /> : null}
                <BlogInfo data={data} />
              </Group>

              <Headline>{title}</Headline>

              <Body fw={400}>{description}</Body>
            </Stack>
          </MotionSlide>

          <MotionSlide delay={1.25}>
            <Divider />
          </MotionSlide>

          {/*   Content   */}
          <Box
            style={{
              overflowX: 'hidden',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isInit ? 0 : 2 }}
            >
              <Box pos="relative">
                <MyPortableText content={content || []} />
              </Box>
            </motion.div>
          </Box>
        </Stack>
      </RwdLayout>
    </>
  )
}
