import styled from 'styled-components';
import { system, System } from '@/lib';

// Box with all variants from every-layout.dev/layouts/
// Stack and Flex get their own component

const Box = styled.div<System>`
  font-family: inherit;
  ${system}
`;

export default Box;
