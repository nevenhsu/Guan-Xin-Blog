'use client'

import { useMediaQuery } from '@mantine/hooks'
import { MotionSlide, MotionBlur } from '@/components/motion'
import { Box, Title, Stack, Group, AspectRatio, Divider, SimpleGrid, Space } from '@mantine/core'
import RwdBlock from '@/components/sanity/Rwd/Block'
import RwdSimpleGrid from '@/components/sanity/Rwd/SimpleGrid'
import SanityImage from '@/components/sanity/Image'
import { MyPortableText } from '@/components/sanity/PortableText'
import { Member } from '@/components/sanity/Member'
import MyCarousel from '@/components/Carousel'
import useQuery from '@/sanity/hooks/useQuery'
import { aboutQuery } from '@/sanity/queries'
import type { AboutData } from '@/sanity/types/about'
import classes from './index.module.css'

type AboutProps = {
  initialData: Partial<AboutData>
}

export default function About({ initialData }: AboutProps) {
  const matches = useMediaQuery('(min-width: 36em)')
  const [data] = useQuery<Partial<AboutData>>(initialData, aboutQuery)

  console.log('About', data)

  const renderMembers = () => data.members?.map((o, i) => <Member key={`${o._id}-${i}`} data={o} />)

  if (!data) return null

  return (
    <>
      <RwdBlock w={{ base: '100%', sm: '90%', lg: 968 }} mx="auto" pt={40}>
        <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xl">
          {/*   Image  */}
          {data.mainImage ? (
            <Group style={{ order: matches ? 1 : 0 }} justify="right">
              <Box w="100%" className={classes.cover} maw={matches ? 360 : ''}>
                <AspectRatio ratio={3 / 4}>
                  <MotionBlur direction="left">
                    <SanityImage
                      image={data.mainImage.asset}
                      sizes="(max-width: 768px) 100vw, (max-width: 992px) 40vw, 33vw"
                      w={1024}
                    />
                  </MotionBlur>
                </AspectRatio>
              </Box>
            </Group>
          ) : null}

          {/*   Title  */}
          <Stack gap="lg">
            <Box style={{ flexGrow: 1 }} />

            <MotionSlide delay={1}>
              <Title fz={{ base: 32, md: 40 }}>{data.title}</Title>
            </MotionSlide>

            <MotionSlide delay={1.25}>
              <Title fz={{ base: 18, md: 22 }} fw={500}>
                {data.subtitle}
              </Title>
            </MotionSlide>

            <Box />
          </Stack>
        </SimpleGrid>

        <Space h={80} />

        <Stack gap={64}>
          {/*   Content  */}
          <Box maw={600} mx="auto">
            {data.body ? (
              <MotionSlide delay={1.75}>
                <MyPortableText content={data.body} />
              </MotionSlide>
            ) : null}
          </Box>

          {/*   Members  */}
          {data.members?.length ? (
            <>
              <Divider />

              <Stack gap={64}>
                <Title order={2} ta="center">
                  {data.memberTitle}
                </Title>

                <Box>
                  {matches ? (
                    <RwdSimpleGrid cols={{ base: 2, md: 3 }} spacing={40}>
                      {renderMembers()}
                    </RwdSimpleGrid>
                  ) : (
                    <MyCarousel duration={data.memberDuration || 10} withControls={false}>
                      {renderMembers()}
                    </MyCarousel>
                  )}
                </Box>
              </Stack>
            </>
          ) : null}
        </Stack>
      </RwdBlock>

      <Divider />
    </>
  )
}
