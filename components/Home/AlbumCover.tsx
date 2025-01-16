import Image from 'next/image'
import { AspectRatio, Box, Stack, Group, Title, Text, ThemeIcon } from '@mantine/core'
import { PiArrowUpRight } from 'react-icons/pi'

export function AlbumCover() {
  return (
    <Stack gap="sm" className="c-pointer">
      <AspectRatio pos="relative" ratio={3 / 2}>
        <Box>
          <Image src="/images/album/album-0.png" alt="" objectFit="cover" fill />
        </Box>
      </AspectRatio>

      <Group justify="space-between" align="start" wrap="nowrap">
        <Stack gap={4}>
          <Title order={5}>Album 1</Title>
          <Text fz="xs" c="dimmed">
            2024/12/08
          </Text>
        </Stack>

        <ThemeIcon variant="transparent">
          <PiArrowUpRight size={20} />
        </ThemeIcon>
      </Group>
    </Stack>
  )
}
