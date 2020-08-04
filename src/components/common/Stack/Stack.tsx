import React, { FC } from 'react';
import css from '@styled-system/css';
import { ResponsiveValue } from 'styled-system';
import { Box } from '~/components';
import { modifyResponsiveValue, ISystem } from '~/lib';
// layout utility

type CSS = React.CSSProperties;

interface StackProps extends ISystem {
  space: ResponsiveValue<CSS['margin']>;
}

const Stack: FC<StackProps> = ({ space, flexDirection, flexDir, ...props }) => {
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
      {...props}
    />
  );
};

export default Stack;
