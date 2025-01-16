'use client'

import { AppShell, Space } from '@mantine/core'
import Header from './Header'
import Footer from './Footer'
import { FooterInfo } from '@/components/Footer/FooterInfo'
import { variables } from '@/theme/cssVariables'
import type { FooterData } from '@/sanity/types/footer'

type MyShellProps = React.PropsWithChildren & {
  footerData: Partial<FooterData>
}

export default function MyAppShell(props: MyShellProps) {
  const { children, footerData } = props

  return (
    <AppShell
      header={{ ...variables.header }}
      withBorder={false}
      styles={{
        header: { background: 'transparent' },
      }}
    >
      <AppShell.Header>
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
