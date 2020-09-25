import React from 'react';

import { Box, Stack } from '~/components';

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
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
    </Stack>
  </Box>
);

export const Responsive = () => (
  <Box p={4}>
    <Stack flexDir={['row', 'column']} space={[1, 2, 3]}>
      <Box borderRadius="xs" size="40px" bg="primary500" />
      <Box borderRadius="xs" size="40px" bg="primary500" />
      <Box borderRadius="xs" size="40px" bg="primary500" />
      <Box borderRadius="xs" size="40px" bg="primary500" />
    </Stack>
    <Stack mt={3} space={3} flexDir={['row', 'column', 'row']}>
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
      <Box borderRadius="xs" size="40px" bg="secondary400" />
    </Stack>
    <Stack mt={3} space={3} flexDir={['column', 'row']}>
      <Box borderRadius="xs" size="40px" bg="secondary500" />
      <Box borderRadius="xs" size="40px" bg="secondary500" />
      <Box borderRadius="xs" size="40px" bg="secondary500" />
      <Box borderRadius="xs" size="40px" bg="secondary500" />
    </Stack>
  </Box>
);

export const OverwritingMargin = () => (
  <Stack p={4} space={[0, 5, 9]}>
    <Box mt={5} borderRadius="xs" size="40px" bg="primary500" />
    <Box mr={5} borderRadius="xs" mt={5} size="40px" bg="primary500" />
    <Box ml={0} borderRadius="xs" size="40px" bg="primary500" />
  </Stack>
);
