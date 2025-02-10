import { Box, type BoxProps } from '@mantine/core'

export default function RwdBlock(props: BoxProps & { id?: string; children: React.ReactNode }) {
  return <Box px={{ base: 16, sm: 24 }} py={40} {...props} />
}
