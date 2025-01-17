'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { useMediaQuery, useDisclosure } from '@mantine/hooks'
import { useAppContext } from '@/store/AppContext'
import { modals } from '@mantine/modals'
import { Link } from '@/i18n/routing'
import { Group, Box, Button, Badge, ActionIcon, Menu, Stack, Divider } from '@mantine/core'
import { MotionSlide } from '@/components/motion'
import UnderlineMotion from '@/components/motion/Underline'
import { HiOutlineMenuAlt4, HiOutlineX, HiOutlineTranslate } from 'react-icons/hi'
import type { ButtonProps } from '@mantine/core'
import classes from './index.module.css'

type MenuItem = { name: string; href: '/' | '/page' | '/about' }

export default function Header() {
  const matches = useMediaQuery('(min-width: 36em)')
  const t = useTranslations('Header')
  const router = useRouter()
  const pathname = usePathname()

  const {
    state: { isPreview, viewportSize, scroll },
  } = useAppContext()
  const inContent = scroll.y > viewportSize.height

  const [opened, { toggle, close }] = useDisclosure()

  const handlelang = (locale: string) => {
    close()
    router.push(pathname, { locale })
  }

  // components
  const renderMenu = (onClick: (o: MenuItem) => void, props: ButtonProps) => {
    const menu: MenuItem[] = [
      { name: t('home'), href: '/' },
      { name: t('page'), href: '/page' },
      { name: t('about'), href: '/about' },
    ]

    return menu.map(o => (
      <Link key={o.name} href={o.href} style={{ textAlign: 'center' }}>
        <Button variant="transparent" onClick={() => onClick(o)} {...props}>
          <UnderlineMotion>{o.name}</UnderlineMotion>
        </Button>
      </Link>
    ))
  }

  const renderLang = () => {
    return (
      <Menu shadow="md" position="bottom-end" width={120}>
        <Menu.Target>
          <ActionIcon variant="transparent" c="white">
            <HiOutlineTranslate size={18} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Language</Menu.Label>
          <Menu.Item onClick={() => handlelang('en')}>English</Menu.Item>
          <Menu.Item onClick={() => handlelang('zhTW')}>中文</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    )
  }

  useEffect(() => {
    const modalId = 'menu'
    if (opened) {
      modals.open({
        title: '',
        modalId,
        fullScreen: true,
        withCloseButton: false,
        withinPortal: false,
        children: (
          <Stack className="absolute-center" gap={32} w="100%">
            {renderMenu(o => toggle(), { fz: 20 })}
            <Box h={120} />
            <Group className={classes.lang} justify="center">
              <Button variant="transparent" c="dimmed" onClick={() => handlelang('en')}>
                English
              </Button>
              <Divider orientation="vertical" />
              <Button variant="transparent" c="dimmed" onClick={() => handlelang('zhTW')}>
                中文
              </Button>
            </Group>
          </Stack>
        ),
        styles: {
          body: { position: 'relative', height: '100%' },
        },
      })
    } else {
      modals.close(modalId)
    }
  }, [opened, pathname])

  return (
    <>
      <Box className={clsx(classes['header-bg'], { hide: !inContent })} />

      <MotionSlide delay={0.5} style={{ height: '100%' }} direction="down">
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
          {matches ? (
            <Group>
              {renderMenu(o => null, {
                fz: { base: 16, lg: 18 },
              })}

              {renderLang()}
            </Group>
          ) : (
            <ActionIcon pos="relative" variant="transparent" onClick={toggle}>
              <HiOutlineMenuAlt4
                size={24}
                className={clsx(classes.icon, { [classes['icon-hide']]: opened })}
              />
              <HiOutlineX
                size={24}
                className={clsx(classes.icon, { [classes['icon-hide']]: !opened })}
              />
            </ActionIcon>
          )}

          {/* Extra */}
          <Badge
            className="absolute-vertical"
            display={isPreview ? 'block' : 'none'}
            variant="outline"
            color="white"
            left={{ base: 80, sm: 120 }}
          >
            Preview
          </Badge>
        </Group>
      </MotionSlide>
    </>
  )
}
