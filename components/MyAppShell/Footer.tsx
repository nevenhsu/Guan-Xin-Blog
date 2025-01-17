import { Box, Text } from '@mantine/core'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box py={4}>
      <Text ta="center" fz="xs">{`© Blog Template ${year}. All Rights Reserved.`}</Text>
    </Box>
  )
}
