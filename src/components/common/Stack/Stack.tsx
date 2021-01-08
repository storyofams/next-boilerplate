import React, { FC, CSSProperties } from 'react';
import css from '@styled-system/css';
import { ResponsiveValue } from 'styled-system';

import { Box } from '~/components';
import { SystemProps, modifyResponsiveValue } from '~/lib';

type CSS = CSSProperties;

interface StackProps extends SystemProps {
  space: ResponsiveValue<CSS['margin']>;
  role?: string;
}

const Stack: FC<StackProps> = ({
  space,
  flexDirection,
  flexDir,
  role,
  ...props
}) => {
  const commonDirectionProp = flexDir || flexDirection || 'row';

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
      flexDir={commonDirectionProp}
      css={css({
        '>*+*': spacingProp,
      })}
      role={role}
      {...props}
    />
  );
};

export default Stack;
