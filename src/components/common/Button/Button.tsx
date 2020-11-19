import React, { forwardRef, FC, HTMLAttributes } from 'react';
import css from '@styled-system/css';

import { Box, Spinner } from '~/components';
import { Link } from '~/components/common/Link';
import { SystemProps } from '~/lib';

import ButtonBase from './components/ButtonBase/ButtonBase';

interface ButtonProps
  extends Omit<Omit<HTMLAttributes<HTMLButtonElement>, 'color'>, 'css'>,
    SystemProps {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'underline';
  href?: string;
  to?: string;
}

const Button: FC<ButtonProps> = forwardRef(
  ({ isLoading, disabled, children, variant, href, to, ...props }, ref) => {
    const _props = {
      ...props,
      disabled: disabled || isLoading,
      variant,
      ref,
    };

    if (isLoading) {
      return (
        <ButtonBase data-is-loading {..._props}>
          <Box position="absolute">
            <Spinner size={16} />
          </Box>
          <Box display="flex" color="transparent">
            {children}
          </Box>
        </ButtonBase>
      );
    }
    if (href) {
      return (
        <Link href={href} css={css({ '&:hover': { opacity: 1 } })}>
          <ButtonBase {..._props}>{children}</ButtonBase>
        </Link>
      );
    }

    if (to) {
      return (
        <Link to={to} css={css({ '&:hover': { opacity: 1 } })}>
          <ButtonBase {..._props}>{children}</ButtonBase>
        </Link>
      );
    }

    return <ButtonBase {..._props}>{children}</ButtonBase>;
  },
);

export default Button;
