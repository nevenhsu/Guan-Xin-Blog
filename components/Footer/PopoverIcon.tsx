import { Stack, Box, Popover } from '@mantine/core'
import { Body } from '@/components/Fonts'
import SanityImage from '@/components/sanity/Image'
import LinkIcon from './LinkIcon'
import { SocialIcon, TitleGroup, CopyName } from './common'
import type { SocialIconData } from '@/sanity/types/socialIcon'

export default function PopoverIcon({ data }: { data: SocialIconData }) {
  const { username, noPopup } = data
  const { asset } = data.qrcode || {}

  if (!asset || noPopup) {
    return <LinkIcon data={data} />
  }

  return (
    <Popover
      width={280}
      position="top"
      withArrow
      shadow="md"
      radius={24}
      styles={{
        dropdown: { padding: 24 },
      }}
    >
      <Popover.Target>
        <SocialIcon data={data} size={32} />
      </Popover.Target>
      <Popover.Dropdown>
        <Stack ta="center" gap="sm">
          <TitleGroup data={data} />

          <Box pos="relative" w={160} h={160} mx="auto">
            <SanityImage image={asset} />
          </Box>

          <Body>{username}</Body>

          <CopyName data={data} />
        </Stack>
      </Popover.Dropdown>
    </Popover>
  )
}
