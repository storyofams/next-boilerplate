import React from 'react';

import { Box } from '~/components';

export default {
  component: Box,
  title: 'Box',
};

export const Basic = () => (
  <Box p={4} display="flex">
    <Box mr={[7, 5, 9]} height={100} width={100} bg="primary500" />
    <Box
      height={100}
      width={100}
      borderRadius="full"
      bg={['secondary400', 'secondary500']}
    />
  </Box>
);
