import { Box, Text } from '@mantine/core'
import MyAvatar from '@/components/sanity/MyAvatar'
import type { MemberData } from '@/sanity/types/member'

export function Member({ data }: { data: Partial<MemberData> }) {
  const { avatar, content } = data
  return (
    <Box>
      <MyAvatar data={avatar} showBio />
      {content ? (
        <Box my={24}>
          <Text>{data.content}</Text>
        </Box>
      ) : null}
    </Box>
  )
}
