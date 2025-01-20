import Image from 'next/image'
import { AspectRatio, Stack, Group, Box, Title, Text, ThemeIcon } from '@mantine/core'
import MyAvatar from '@/components/sanity/MyAvatar'
import { BlogInfo } from './BlogInfo'
import { MyBadge } from './MyBadge'
import { PiArrowUpRight } from 'react-icons/pi'
import type { PageData } from '@/sanity/types/page'

export function BlogCard({ data }: { data: Partial<PageData> }) {
  return (
    <Stack className="c-pointer">
      <AspectRatio pos="relative" ratio={3 / 2}>
        <Box>
          <Image src="/images/cover/cover-0.png" alt="" objectFit="cover" fill />
        </Box>
      </AspectRatio>

      <Group gap="xs">
        <MyBadge>Design</MyBadge>
        <MyBadge>UX</MyBadge>
        <MyBadge>UI</MyBadge>
      </Group>

      <Stack gap="xs">
        <Group justify="space-between" align="start" wrap="nowrap">
          <Title order={3}>UX review presentations</Title>
          <ThemeIcon variant="transparent">
            <PiArrowUpRight size={20} />
          </ThemeIcon>
        </Group>

        <Text c="dimmed" mb="xs" lineClamp={3}>
          How do you create compelling presentations that wow your colleagues and impress your
          managers?
        </Text>

        <Group justify="space-between" wrap="nowrap">
          <MyAvatar
            data={{
              image: {
                asset: {
                  _ref: 'image-0',
                  url: '/images/avatar/avatar-0.png',
                },
              },
              name: 'John Doe',
              bio: 'UX designer',
            }}
          />

          <BlogInfo data={data} />
        </Group>
      </Stack>
    </Stack>
  )
}
