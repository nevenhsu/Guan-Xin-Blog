import { forwardRef } from 'react'
import { Badge, BadgeProps, createPolymorphicComponent } from '@mantine/core'
import { getInitialsColor } from '@/lib/getInitialsColor'

export const MyBadge = createPolymorphicComponent<'div', BadgeProps>(
  forwardRef<HTMLDivElement, BadgeProps>(function MyBadge({ children, color, ...others }, ref) {
    return (
      <Badge
        component="div"
        variant="outline"
        color={color || getInitialsColor(children?.toString() || '')}
        autoContrast
        {...others}
        ref={ref}
      >
        {children}
      </Badge>
    )
  })
)
