import { forwardRef } from 'react'
import { Group, ActionIcon, CopyButton, Button } from '@mantine/core'
import { Subtitle } from '@/components/Fonts'
import { getIcon, getName } from '@/utils/socialIcon'
import { PiArrowUpRight, PiCopy } from 'react-icons/pi'
import type { ActionIconProps } from '@mantine/core'
import type { SocialIconData } from '@/sanity/types/socialIcon'

type SocialIconProps = { data: Partial<SocialIconData>; size?: number } & ActionIconProps

export const SocialIcon = forwardRef<HTMLButtonElement, SocialIconProps>(function SocialIcon(
  { data, size = 24, ...rest },
  ref
) {
  return (
    <ActionIcon size={size} ref={ref} c="var(--mantine-color-text)" variant="transparent" {...rest}>
      {getIcon(data.icon, { size })}
    </ActionIcon>
  )
})

const handleOpen = (href?: string) => {
  if (href) {
    window.open(href, '_blank', 'noopener,noreferrer')
  }
}

export function TitleGroup({ data }: { data: Partial<SocialIconData> }) {
  return (
    <Group justify="center" gap={20}>
      {getIcon(data.icon, { size: 24 })}
      <Subtitle>{getName(data.icon)}</Subtitle>
      <ActionIcon
        onClick={() => handleOpen(data.href)}
        size={20}
        pos="relative"
        top={-1}
        c="white"
        variant="transparent"
      >
        <PiArrowUpRight size={24} />
      </ActionIcon>
    </Group>
  )
}

export function CopyName({ data }: { data: Partial<SocialIconData> }) {
  const { username } = data
  return (
    <>
      {username ? (
        <CopyButton value={username}>
          {({ copied, copy }) => (
            <Button rightSection={<PiCopy />} variant="transparent" onClick={copy}>
              {copied ? 'Copied' : 'Copy'}
            </Button>
          )}
        </CopyButton>
      ) : null}
    </>
  )
}
