import React, { FC, forwardRef } from 'react';
import { Box, BoxProps } from 'rebass/styled-components';

import req from './req';

const styles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  svg: { verticalAlign: 'middle' },
};

export interface IconProps extends BoxProps {
  icon: string;
  iconAs?: string;
  href?: string;
  className?: string;
}

export const Icon: FC<IconProps> = forwardRef(
  ({ icon, iconAs, ...props }, ref) => {
    // if (typeof window === 'undefined') return null

    function getAs(): any {
      switch (true) {
        case iconAs !== undefined:
          return iconAs;
        case props.href !== undefined:
          return 'a';
        case props.onClick !== undefined:
          return 'button';
        default:
          return 'div';
      }
    }

    const IconSvg = req(`./${icon}.svg`);

    return (
      <Box ref={ref} aria-hidden as={getAs()} sx={styles} {...props}>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <IconSvg.default />
      </Box>
    );
  },
);
