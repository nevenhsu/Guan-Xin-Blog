import { Box, Group } from '@mantine/core'
import { Body, Caption } from '@/components/Fonts'
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
        <SanityImage image={image?.asset} />
      </Box>
      <Box>
        <Body fw={500}>{name}</Body>
        {showBio && bio ? <Caption c="dimmed">{bio}</Caption> : null}
      </Box>
    </Group>
  )
}
