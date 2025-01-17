'use client'

import clsx from 'clsx'
import { usePrevious } from 'react-use'
import { useAppContext } from '@/store/AppContext'
import { AppShell, Space } from '@mantine/core'
import Header from './Header'
import Footer from './Footer'
import { FooterInfo } from '@/components/Footer/FooterInfo'
import { variables } from '@/theme/cssVariables'
import type { FooterData } from '@/sanity/types/footer'
import classes from './index.module.css'

type MyShellProps = React.PropsWithChildren & {
  footerData: Partial<FooterData>
}

export default function MyAppShell(props: MyShellProps) {
  const { children, footerData } = props

  const {
    state: { scroll },
  } = useAppContext()

  const previousScroll = usePrevious(scroll)
  const goingDown = scroll.y > (previousScroll?.y || 0)

  return (
    <AppShell
      header={{ ...variables.header }}
      withBorder={false}
      styles={{
        header: { background: 'transparent' },
      }}
    >
      <AppShell.Header
        className={clsx(classes.header, {
          [classes['header-out']]: scroll.y > 200 && goingDown,
        })}
      >
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <>
          {children}

          <Space h={100} />

          <FooterInfo initialData={footerData} />

          <Space h={24} />
        </>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  )
}
