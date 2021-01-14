import React, { forwardRef, FC, HTMLAttributes } from 'react';
import {
  Box,
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass/styled-components';

import { Spinner } from '~/components';
import { Link } from '~/components/common/Link';
interface ButtonProps
  extends Omit<Omit<HTMLAttributes<HTMLButtonElement>, 'color'>, 'css'>,
    RebassButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'secondary' | 'underline';
  href?: string;
  to?: string;
}

const styles = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 'inherit',
  fontWeight: 'medium',
  borderRadius: 'xs',
  userSelect: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.18s, box-shadow 0.18s, border-color 0.18s, color 0.18s',
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&:active': { boxShadow: 'none' },
  '&[data-is-loading]': { cursor: 'wait' },
};

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
        <RebassButton data-is-loading sx={styles} {..._props}>
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
          <RebassButton sx={styles} {..._props}>
            {children}
          </RebassButton>
        </Link>
      );
    }

    if (to) {
      return (
        <Link to={to} sx={{ '&:hover': { opacity: 1 } }}>
          <RebassButton sx={styles} {..._props}>
            {children}
          </RebassButton>
        </Link>
      );
    }

    return (
      <RebassButton sx={styles} {..._props}>
        {children}
      </RebassButton>
    );
  },
);

export default Button;
