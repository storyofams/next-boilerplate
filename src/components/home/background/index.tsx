import { Flex } from 'rebass/styled-components';

import { CrossPattern } from './CrossPattern';

export const Background = () => (
  <Flex
    bg="black"
    flexWrap="wrap"
    alignContent="start"
    justifyContent="space-evenly"
    flex={1}
    overflow="hidden"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      '&:after': {
        content: "''",
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background:
          'radial-gradient(circle, rgba(0,0,0,0.75) 0%, rgba(0,0,0,75) 80%);',
      },
    }}
  >
    <CrossPattern />
  </Flex>
);
