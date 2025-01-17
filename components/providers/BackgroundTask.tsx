'use client'

import { useEffect } from 'react'
import { useViewportSize, useWindowScroll } from '@mantine/hooks'
import { useAppContext } from '@/store/AppContext'
import { useBreakPoints } from '@/hooks/bg/useBreakPoints'

export default function BackgroundTask() {
  const { updateState } = useAppContext()

  useBreakPoints() // update break points in app context

  const viewportSize = useViewportSize()
  const [scroll] = useWindowScroll()

  useEffect(() => {
    updateState({ viewportSize })
  }, [viewportSize])

  useEffect(() => {
    updateState({ scroll })
  }, [scroll])

  return null
}
