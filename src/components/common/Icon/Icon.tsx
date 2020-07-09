import React, {FC, forwardRef} from 'react'
import styled from 'styled-components'
import {ISystem} from '@/lib'
import {Box} from '../Box'
import req from './req'

export const StyledIcon = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  svg {
    vertical-align: middle;
  }
`

export interface IconProps extends ISystem<React.HTMLAttributes<HTMLDivElement>> {
  icon: string
  as?: string
  href?: string
  className?: string
}

export const Icon: FC<IconProps> = forwardRef(({icon, color, ...props}, ref) => {
  // if (typeof window === 'undefined') return null

  function getAs(): any {
    switch (true) {
      case props.as !== undefined:
        return props.as
      case props.href !== undefined:
        return 'a'
      case props.onClick !== undefined:
        return 'button'
      default:
        return 'div'
    }
  }

  const IconSvg = req(`./${icon}.svg`)

  return (
    <StyledIcon ref={ref} aria-hidden as={getAs()} color={color} {...props}>
      <IconSvg.default />
    </StyledIcon>
  )
})

export default Icon
