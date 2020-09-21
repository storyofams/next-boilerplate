import React, { FC } from 'react';
import { ResponsiveValue } from 'styled-system';
import css from '@styled-system/css';

import { ISystem, modifyResponsiveValue } from '~/lib';
import { Box } from '~/components';

type CSS = React.CSSProperties;

interface StackProps extends ISystem {
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

  console.log(spacingProp);

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
