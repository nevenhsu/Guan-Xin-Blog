'use client'

import { useDisclosure } from '@mantine/hooks'
import { Box, Stack, Drawer, ActionIcon } from '@mantine/core'
import { MyTitle } from '@/components/Fonts'
import { SocialIcon, TitleGroup, CopyName } from './common'
import { HiOutlineX } from 'react-icons/hi'
import LinkIcon from './LinkIcon'
import type { SocialIconData } from '@/sanity/types/socialIcon'

export default function DrawerIcon({ data }: { data: Partial<SocialIconData> }) {
  const [opened, { open, close }] = useDisclosure(false)
  const { noPopup } = data
  const { asset } = data.qrcode || {}

  if (!asset || noPopup) {
    return <LinkIcon data={data} />
  }

  return (
    <>
      <Drawer
        size="xs"
        position="bottom"
        padding={24}
        radius={24}
        withCloseButton={false}
        opened={opened}
        onClose={close}
        styles={{
          content: {
            height: 'auto',
            paddingBottom: 16,
            borderRadius: '24px 24px 0 0',
            background: 'var(--mantine-color-body)',
            borderTop: '1px solid var(--divider-color)',
          },
          header: {
            background: 'transparent',
          },
        }}
      >
        <Box h={40} ta="right">
          <ActionIcon onClick={close} c="white" variant="transparent">
            <HiOutlineX size={24} />
          </ActionIcon>
        </Box>
        <Stack gap={24}>
          <TitleGroup data={data} />
          <Box
            ta="center"
            py={12}
            style={{
              borderRadius: 8,
              backgroundColor: 'var(--mantine-color-gray-1)',
              border: '2px solid var(--mantine-color-gray-3)',
            }}
          >
            <MyTitle>{data.username}</MyTitle>
          </Box>
          <CopyName data={data} />
        </Stack>
      </Drawer>

      <Box onClick={open}>
        <SocialIcon size={32} data={data} />
      </Box>
    </>
  )
}
