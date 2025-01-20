'use client'

import useQuery from '@/sanity/hooks/useQuery'
import { useAppContext } from '@/store/AppContext'
import { MotionSlide } from '@/components/motion'
import { Stack, Group, px } from '@mantine/core'
import { Subtitle, Body, Caption } from '@/components/Fonts'
import RwdBlock from '@/components/sanity/Rwd/Block'
import UnderlineMotion from '@/components/motion/Underline'
import PopoverIcon from './PopoverIcon'
import DrawerIcon from './DrawerIcon'
import { footerQuery } from '@/sanity/queries'
import type { FooterData } from '@/sanity/types/footer'

export function FooterInfo({ initialData }: { initialData: Partial<FooterData> }) {
  const [data] = useQuery<Partial<FooterData>>(initialData, footerQuery)
  const { email, phone, address } = data || {}

  const { state } = useAppContext()
  const { width } = state.viewportSize
  const matches = width >= Number(px('48em'))

  return (
    <RwdBlock
      px={24}
      style={{
        position: 'relative',
        zIndex: 1,
      }}
    >
      <MotionSlide>
        <Stack mb="xl">
          <Subtitle>About</Subtitle>
          <Body maw={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </Body>
        </Stack>

        <Stack gap={4}>
          <Group gap="xs">
            <Caption fw={500}>Email:</Caption>
            <UnderlineMotion>
              <Caption
                display="inline-block"
                className="c-pointer"
                // onClick={() => (window.location.href = `mailto:${email}`)}
              >
                myEmail@gmail.com
              </Caption>
            </UnderlineMotion>
          </Group>

          <Group gap="xs">
            <Caption fw={500}>Phone:</Caption>
            <UnderlineMotion>
              <Caption
                display="inline-block"
                className="c-pointer"
                // onClick={() => (window.location.href = `mailto:${email}`)}
              >
                012-345-6789
              </Caption>
            </UnderlineMotion>
          </Group>

          <Group gap="xs">
            <Caption fw={500}>Address:</Caption>
            <UnderlineMotion>
              <Caption
                display="inline-block"
                className="c-pointer"
                // onClick={() => (window.location.href = `mailto:${email}`)}
              >
                1234 Main St, City, State, 12345
              </Caption>
            </UnderlineMotion>
          </Group>
        </Stack>

        <Group gap={24} justify="center">
          {matches ? (
            <>{data?.links?.map(d => <PopoverIcon key={d._key} data={d} />)}</>
          ) : (
            <>{data?.links?.map(d => <DrawerIcon key={d._key} data={d} />)}</>
          )}
        </Group>
      </MotionSlide>
    </RwdBlock>
  )
}
