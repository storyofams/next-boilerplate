import { CSSProperties } from 'react';
import styled from 'styled-components';
import { ResponsiveValue } from 'styled-system';
import { variant } from 'styled-system';

import { Box } from '~/components';

type CSS = CSSProperties;

const variants = {
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export interface FlexProps {
  variant?: keyof typeof variants;
  space?: ResponsiveValue<CSS['margin']>;
}

const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${(p) => variant({ variants })(p)}
`;

Flex.displayName = 'Flex';

export default Flex;
