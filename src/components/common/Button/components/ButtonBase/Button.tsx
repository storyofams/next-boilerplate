import React, { forwardRef } from 'react';
import { Box, Spinner } from '~/components';
import { SystemProps } from '~/lib';

import ButtonBase from './ButtonBase';

interface ButtonProps
  extends Omit<Omit<React.HTMLAttributes<HTMLButtonElement>, 'color'>, 'css'>,
    SystemProps {
  isLoading?: boolean;
  isFullWidth?: boolean;
  baseColor?: string;
  disabled?: boolean;
  spinner?: JSX.Element;
  customSpinner?: JSX.Element;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      isLoading,
      spinner: customSpinner,
      disabled,
      children,
      baseColor = 'brand',
      ...props
    },
    ref,
  ) => {
    const _props = {
      ...props,
      disabled: disabled || isLoading,
      baseColor,
      ref,
    };

    if (isLoading) {
      return (
        <ButtonBase data-is-loading {..._props}>
          <Box position="absolute">{customSpinner || <Spinner />}</Box>
          <Box display="flex" color="transparent">
            {children}
          </Box>
        </ButtonBase>
      );
    }

    return <ButtonBase {..._props}>{children}</ButtonBase>;
  },
);

export default Button;
