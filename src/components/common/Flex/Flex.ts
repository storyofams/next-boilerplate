import styled from 'styled-components';
import { Box } from '@/components';
import { ResponsiveValue } from 'styled-system';
import { variant } from '@/lib';

type CSS = React.CSSProperties;

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
  ${p => variant({ variants })(p)}
`;

Flex.displayName = 'Flex';

export default Flex;
