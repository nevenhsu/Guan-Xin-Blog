'use client'

import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Group, Box } from '@mantine/core'
import classes from './index.module.css'

export default function Header() {
  return (
    <>
      <Box className={classes['header-bg']} />

      <Group h="100%" px={16} justify="space-between" pos="relative" wrap="nowrap">
        {/* Left */}
        <Group gap="md" wrap="nowrap">
          <Link href="/">
            <Box className="c-pointer" w={48} h={48} ml={-6}>
              <Image src="/logo.svg" width={48} height={48} alt="" />
            </Box>
          </Link>
        </Group>

        {/* Right */}
        <Group wrap="nowrap"></Group>
      </Group>
    </>
  )
}
