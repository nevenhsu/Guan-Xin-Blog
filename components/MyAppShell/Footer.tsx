import { Group, Box, Text } from '@mantine/core'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Group justify="space-between" px="md" py={4}>
      <Box>
        <Text fz="xs">{`Blog Template ${year}. All Rights Reserved.`}</Text>
      </Box>
    </Group>
  )
}
