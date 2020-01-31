import React, {FC} from 'react'
import styled from 'styled-components'
import {ISystem} from '@lib'
import {Box} from '@components'

export const StyledIcon = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  svg {
    vertical-align: middle;
  }
`

const req = require.context(
  '!@svgr/webpack?{"icon":"true","svgo":"true"}!./library',
  false,
  /\.svg$/,
)

export interface IconProps
  extends ISystem,
    Omit<Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>, 'css'> {
  icon: string
  as?: string
  href?: string
  onClick?: () => void
}

export const Icon: FC<IconProps> = ({icon, color, ...props}) => {
  if (typeof window === 'undefined') return null

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
    <StyledIcon as={getAs()} color={color} {...props}>
      <IconSvg.default />
    </StyledIcon>
  )
}

export default Icon
