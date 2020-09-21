import styled from 'styled-components';

import { ISystem, system } from '~/lib';

const Box = styled.div<ISystem>`
  font-family: inherit;

  ${system}
`;

export default Box;
