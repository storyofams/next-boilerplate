import styled from 'styled-components';
import { variant } from 'styled-system';

import { Box } from '~/components';

const variants = {
  h1: {
    fontSize: [8, 10],
    fontWeight: 'bold',
    lineHeight: 'medium',
  },
  h2: {
    fontSize: [7, 9],
    fontWeight: 'bold',
    lineHeight: 'medium',
  },
  h3: {
    fontSize: [6, 8],
    fontWeight: 'bold',
    lineHeight: 'medium',
  },
  h4: {
    fontSize: [5, 6],
    fontWeight: 'bold',
    lineHeight: 'medium',
  },
  h5: {
    fontSize: [3, 5],
    fontWeight: 'bold',
    lineHeight: 'medium',
  },
  pxl: {
    fontSize: [2, 4],
    fontWeight: 'regular',
    lineHeight: 'medium',
  },
  pl: {
    fontSize: [2, 3],
    fontWeight: 'regular',
    lineHeight: 'medium',
  },
  pm: {
    fontSize: [1, 2],
    fontWeight: 'regular',
    lineHeight: 'medium',
  },
  psm: {
    fontSize: 1,
    fontWeight: 'regular',
    lineHeight: 'medium',
  },
  pxs: {
    fontSize: 0,
    fontWeight: 'regular',
    lineHeight: 'medium',
  },
};

export interface TextProps {
  ellipsis?: boolean;
  variant?: keyof typeof variants;
}

export const Text = styled(Box)<TextProps>`
  ${variant({ variants })}

  ${(p) =>
    p.ellipsis &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export default Text;
