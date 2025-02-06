'use client'

import useQuery from '@/sanity/hooks/useQuery'
import { useAppContext } from '@/store/AppContext'
import { MotionSlide } from '@/components/motion'
import { Stack, Group, Space, SimpleGrid, px } from '@mantine/core'
import { Subtitle, Body, Caption } from '@/components/Fonts'
import RwdLayout from '@/components/share/RwdLayout'
import UnderlineMotion from '@/components/motion/Underline'
import PopoverIcon from './PopoverIcon'
import DrawerIcon from './DrawerIcon'
import { footerQuery } from '@/sanity/queries'
import type { FooterData } from '@/sanity/types/footer'

export function FooterInfo({ initialData }: { initialData: Partial<FooterData> }) {
  const [data] = useQuery<Partial<FooterData>>(initialData, footerQuery)
  const { title, description, email, phone, address, links } = data || {}
  const hasInfo = Boolean(email || phone || address)

  const { state } = useAppContext()
  const { width } = state.viewportSize
  const matches = width >= Number(px('48em'))

  return (
    <RwdLayout
      style={{
        position: 'relative',
        zIndex: 1,
      }}
      py={{ base: 40, sm: 60 }}
    >
      <MotionSlide>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Stack>
            <Subtitle>{title}</Subtitle>
            <Body maw={400}>{description}</Body>
          </Stack>

          <Stack gap={4}>
            {hasInfo && <Space h={{ base: 0, sm: 36 }} />}

            {email ? (
              <Group gap="xs">
                <Caption fw={500}>Email:</Caption>
                <UnderlineMotion>
                  <a href={`mailto:${email}`}>
                    <Caption display="inline-block" className="c-pointer">
                      {email}
                    </Caption>
                  </a>
                </UnderlineMotion>
              </Group>
            ) : null}

            {phone ? (
              <Group gap="xs">
                <Caption fw={500}>Phone:</Caption>
                <UnderlineMotion>
                  <a href={`tel:${phone}`}>
                    <Caption display="inline-block" className="c-pointer">
                      {phone}
                    </Caption>
                  </a>
                </UnderlineMotion>
              </Group>
            ) : null}

            {address ? (
              <Group gap="xs">
                <Caption fw={500}>Address:</Caption>
                <UnderlineMotion>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Caption
                      display="inline-block"
                      className="c-pointer"
                      // onClick={() => (window.location.href = `mailto:${email}`)}
                    >
                      {address}
                    </Caption>
                  </a>
                </UnderlineMotion>
              </Group>
            ) : null}
          </Stack>
        </SimpleGrid>

        {Boolean(links?.length) && <Space h={40} />}

        <Group gap={24} justify="center">
          {links?.map(d =>
            matches ? <PopoverIcon key={d._key} data={d} /> : <DrawerIcon key={d._key} data={d} />
          )}
        </Group>
      </MotionSlide>
    </RwdLayout>
  )
}
