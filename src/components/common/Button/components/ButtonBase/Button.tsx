import React from 'react'
import {ISystem} from '@lib'
import {Box, Spinner} from '@components'

import ButtonBase from './ButtonBase'

interface ButtonProps
  extends Omit<Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>, 'css'>,
    ISystem {
  isLoading?: boolean
  isFullWidth?: boolean
  baseColor?: string
  disabled?: boolean
  spinner?: JSX.Element
  customSpinner?: JSX.Element
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Button: React.FC<ButtonProps> = ({
  isLoading,
  spinner: customSpinner,
  disabled,
  children,
  baseColor = 'brand',
  ...props
}) => {
  const _props = {
    ...props,
    disabled: disabled || isLoading,
    baseColor,
  }

  if (isLoading) {
    return (
      <ButtonBase data-is-loading {..._props}>
        <Box position="absolute">{customSpinner || <Spinner />}</Box>
        <Box display="flex" color="transparent">
          {children}
        </Box>
      </ButtonBase>
    )
  }

  return <ButtonBase {..._props}>{children}</ButtonBase>
}

export default Button
