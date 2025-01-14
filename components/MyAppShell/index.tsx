'use client'

import { AppShell } from '@mantine/core'
import Header from './Header'
import { variables } from '@/theme/cssVariables'

export default function MyAppShell({ children }: React.PropsWithChildren) {
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

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
