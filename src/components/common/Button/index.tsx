import React, { forwardRef, FC } from 'react';
import {
  Box,
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass/styled-components';

import { Spinner } from '~/components';
import { Link } from '~/components/common/Link';

interface ButtonProps extends RebassButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'secondary' | 'underline';
  href?: string;
  to?: string;
}

export const Button: FC<ButtonProps> = forwardRef(
  ({ isLoading, disabled, children, variant, href, to, ...props }, ref) => {
    const _props = {
      ...props,
      disabled: disabled || isLoading,
      variant,
      ref,
    };

    if (isLoading) {
      return (
        <RebassButton data-is-loading {..._props}>
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Spinner size={16} />
          </Box>
          <Box display="flex" color="transparent">
            {children}
          </Box>
        </RebassButton>
      );
    }

    if (href) {
      return (
        <Link href={href} sx={{ '&:hover': { opacity: 1 } }}>
          <RebassButton {..._props}>{children}</RebassButton>
        </Link>
      );
    }

    if (to) {
      return (
        <Link to={to} sx={{ '&:hover': { opacity: 1 } }}>
          <RebassButton {..._props}>{children}</RebassButton>
        </Link>
      );
    }

    return <RebassButton {..._props}>{children}</RebassButton>;
  },
);
