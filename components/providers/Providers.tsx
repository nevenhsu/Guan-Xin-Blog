'use client'

import '@/utils/console'

import { ModalsProvider } from '@mantine/modals'
import ReduxProvider from '@/store/ReduxProvider'
import ThemeProvider from './ThemeProvider'
import BackgroundTask from './BackgroundTask'

export default function Providers({ children }: React.PropsWithChildren) {
  return (
    <>
      <ReduxProvider>
        <ThemeProvider>
          <ModalsProvider modalProps={{ centered: true }}>
            <>
              {children}
              <BackgroundTask />
            </>
          </ModalsProvider>
        </ThemeProvider>
      </ReduxProvider>
    </>
  )
}
