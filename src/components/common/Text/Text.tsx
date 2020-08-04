import styled from 'styled-components';
import { variant } from 'styled-system';
import { Box } from '~/components';

const variants = {
  ellipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

export interface TextProps {
  variant?: keyof typeof variants;
}

const Text = styled(Box)<TextProps>`
  ${variant({ variants })}
`;

export default Text;
