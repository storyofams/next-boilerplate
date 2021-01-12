import React, { FC, CSSProperties } from 'react';
import { ResponsiveValue } from 'styled-system';
import css from '@styled-system/css';

import { SystemProps, modifyResponsiveValue } from '~/lib';
import { Box } from '~/components';

type CSS = CSSProperties;

interface StackProps extends SystemProps {
  space: ResponsiveValue<CSS['margin']>;
  role?: string;
}

const Stack: FC<StackProps> = ({ space, flexDirection, role, ...props }) => {
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

  console.log(spacingProp);

  return (
    <Box
      display="flex"
      flexDirection={commonDirectionProp}
      css={css({
        '>*+*': spacingProp,
      })}
      role={role}
      {...props}
    />
  );
};

export default Stack;
