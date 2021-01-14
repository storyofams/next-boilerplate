import React from 'react';
import { Box } from 'rebass/styled-components';

import { Stack } from '~/components';

export default {
  component: Stack,
  title: 'Stack',
};

export const Basic = () => (
  <Box p={5}>
    <h1>
      Stack is a layout utility that adds space on one side which in turn
      creates a stack.
    </h1>
    <Stack space={3} mt={4}>
      <Box>
        <Box size="40px" bg="secondary400" sx={{ borderRadius: 'xs' }} />
      </Box>
      <Box>
        <Box size="40px" bg="secondary400" sx={{ borderRadius: 'xs' }} />
      </Box>
    </Stack>
  </Box>
);

export const Responsive = () => (
  <Box p={4}>
    <Stack space={[1, 2, 3]}>
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
    </Stack>
    <Stack mt={3} space={3} flexDirection={['column', 'row', 'column']}>
      <Box size="40px" bg="secondary400" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary400" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary400" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary400" sx={{ borderRadius: 'xs' }} />
    </Stack>
    <Stack mt={3} space={3} flexDirection={['row', 'column']}>
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
      <Box size="40px" bg="secondary500" sx={{ borderRadius: 'xs' }} />
    </Stack>
  </Box>
);

export const OverwritingMargin = () => (
  <Stack p={4} space={[0, 5, 9]}>
    <Box mt={5} size="40px" bg="primary500" sx={{ borderRadius: 'xs' }} />
    <Box
      mr={5}
      mt={5}
      size="40px"
      bg="primary500"
      sx={{ borderRadius: 'xs' }}
    />
    <Box ml={0} size="40px" bg="primary500" sx={{ borderRadius: 'xs' }} />
  </Stack>
);
