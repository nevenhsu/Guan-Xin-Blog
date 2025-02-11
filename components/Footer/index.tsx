'use client'

import { FooterInfo } from './FooterInfo'
import { Box, Text, Divider } from '@mantine/core'
import type { FooterData } from '@/sanity/types/footer'

export default function Footer({ footerData }: { footerData: Partial<FooterData> }) {
  const year = new Date().getFullYear()

  return (
    <Box>
      <Divider />

      <FooterInfo initialData={footerData} />

      <Box py={4}>
        <Text ta="center" fz="xs">{`© Blog Template ${year}. All Rights Reserved.`}</Text>
      </Box>
    </Box>
  )
}
