import { Box, Group, Text } from '@mantine/core'
import SanityImage from '@/components/sanity/Image'
import type { AvatarData } from '@/sanity/types/avatar'

export default function MyAvatar({
  data,
  showBio,
}: {
  data?: Partial<AvatarData>
  showBio?: boolean
}) {
  const { image, name, bio } = data || {}

  return (
    <Group gap="xs" wrap="nowrap">
      <Box
        w={{ base: 24, sm: 32 }}
        h={{ base: 24, sm: 32 }}
        style={{
          position: 'relative',
          borderRadius: 999,
          overflow: 'hidden',
        }}
      >
        <SanityImage image={image?.asset} w={32} sizes="32px" />
      </Box>
      <Box>
        <Text fw={500}>{name}</Text>
        {showBio && bio ? (
          <Text fz={14} c="dimmed">
            {bio}
          </Text>
        ) : null}
      </Box>
    </Group>
  )
}
