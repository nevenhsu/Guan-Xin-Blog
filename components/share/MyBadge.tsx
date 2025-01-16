import { forwardRef } from 'react'
import { Badge, BadgeProps, createPolymorphicComponent } from '@mantine/core'
import { getInitialsColor } from '@/lib/getInitialsColor'

export const MyBadge = createPolymorphicComponent<'div', BadgeProps>(
  forwardRef<HTMLDivElement, BadgeProps>(({ children, ...others }, ref) => (
    <Badge
      component="div"
      color={getInitialsColor(children?.toString() || '')}
      autoContrast
      {...others}
      ref={ref}
    >
      {children}
    </Badge>
  ))
)
