import styled from 'styled-components';

import { SystemProps, system } from '~/lib';

const Box = styled.div<SystemProps>`
  font-family: inherit;

  ${system}
`;

export default Box;
