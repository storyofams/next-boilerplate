import React from 'react';

import { Box, Flex, Stack } from '~/components';

export default {
  component: Flex,
  title: 'Flex',
};

export const Basic = () => (
  <Stack space={3} p={4}>
    <Box
      size="50px"
      border="1px solid"
      borderColor="secondary400"
      borderRadius="xs"
    />
    <Box
      size="50px"
      border="1px solid"
      borderColor="secondary400"
      borderRadius="xs"
    />
    <Box
      size="50px"
      border="1px solid"
      borderColor="secondary400"
      borderRadius="xs"
    />
    <Box
      size="50px"
      border="1px solid"
      borderColor="secondary400"
      borderRadius="xs"
    />
    <Box
      size="50px"
      border="1px solid"
      borderColor="secondary400"
      borderRadius="xs"
    />
  </Stack>
);

export const Center = () => (
  <Flex
    m={4}
    variant="center"
    border="1px solid"
    borderColor="secondary400"
    size="200px"
    borderRadius="xs"
  >
    <Box size="50px" bg="primary500" borderRadius="xs" />
  </Flex>
);
