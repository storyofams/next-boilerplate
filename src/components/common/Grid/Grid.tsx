import React, { FC } from 'react';
import css from '@styled-system/css';
import { ResponsiveValue } from 'styled-system';

import { Box, Flex } from '~/components';
import { SystemProps, modifyResponsiveValue } from '~/lib';

interface GridProps extends SystemProps {
  rowSize: ResponsiveValue<number>;
  rowGap?: ResponsiveValue<number>;
  columnGap?: ResponsiveValue<number>;
}

const Grid: FC<GridProps> = ({
  rowSize,
  rowGap = 0,
  columnGap = 0,
  children,
  ...props
}) => {
  return (
    <Box {...props}>
      <Flex
        flexWrap="wrap"
        ml={modifyResponsiveValue(columnGap, (val) => -val)}
        mt={modifyResponsiveValue(rowGap, (val) => -val)}
        css={css({
          '& > *': {
            flex: modifyResponsiveValue(
              rowSize,
              (size) => `0 1 ${(1 / size) * 100}%`,
            ),
            pl: columnGap,
            pt: rowGap,
          },
        })}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Grid;
