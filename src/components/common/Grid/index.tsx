import React, { FC } from 'react';
import { Box, BoxProps, Flex } from 'rebass/styled-components';
import { ResponsiveValue } from 'styled-system';

import { modifyResponsiveValue } from '~/lib';

interface GridProps extends BoxProps {
  rowSize: ResponsiveValue<number>;
  rowGap?: ResponsiveValue<number>;
  columnGap?: ResponsiveValue<number>;
}

export const Grid: FC<GridProps> = ({
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
        sx={{
          '& > *': {
            flex: modifyResponsiveValue(
              rowSize,
              (size) => `0 1 ${(1 / size) * 100}%`,
            ),
            pl: columnGap,
            pt: rowGap,
          },
        }}
      >
        {children}
      </Flex>
    </Box>
  );
};
