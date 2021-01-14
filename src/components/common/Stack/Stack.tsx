import React, { FC, CSSProperties } from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import { ResponsiveValue } from 'styled-system';

import { modifyResponsiveValue } from '~/lib';

type CSS = CSSProperties;
interface StackProps extends BoxProps {
  space: ResponsiveValue<CSS['margin']>;
  role?: string;
  flexDirection?: ResponsiveValue<CSS['flexDirection']>;
}

const Stack: FC<StackProps> = ({
  space,
  flexDirection,
  role,
  sx,
  ...props
}) => {
  const commonDirectionProp = flexDirection || 'row';

  function parseDirection(direction) {
    const isRow = direction.startsWith('row');
    const isReversed = direction.endsWith('reverse');

    return isRow
      ? { [isReversed ? 'mr' : 'ml']: space, mb: 0, mt: 0 }
      : { [isReversed ? 'mb' : 'mt']: space, ml: 0, mr: 0 };
  }

  const spacingProp = modifyResponsiveValue(
    commonDirectionProp,
    parseDirection,
  );

  return (
    <Box
      display="flex"
      sx={{
        '&& > * + *': spacingProp,
        flexDirection: commonDirectionProp,
        ...sx,
      }}
      role={role}
      {...props}
    />
  );
};

export default Stack;
