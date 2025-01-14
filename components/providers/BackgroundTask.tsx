'use client'

import { useEffect } from 'react'
import { useViewportSize } from '@mantine/hooks'
import { useAppContext } from '@/store/AppContext'
import { useBreakPoints } from '@/hooks/bg/useBreakPoints'

export default function BackgroundTask() {
  const { updateState } = useAppContext()

  useBreakPoints() // update break points in app context

  const viewportSize = useViewportSize()

  useEffect(() => {
    updateState({ viewportSize })
  }, [viewportSize])

  return null
}
