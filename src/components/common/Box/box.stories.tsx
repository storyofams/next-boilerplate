import React from 'react';

import { Box } from '~/components';

export default {
  component: Box,
  title: 'Box',
};

export const Basic = () => (
  <Box p={4} d="flex">
    <Box mr={[7, 5, 9]} h={100} w={100} bg="primary500" />
    <Box
      h={100}
      w={100}
      borderRadius="full"
      bg={['secondary400', 'secondary500']}
    />
  </Box>
);
