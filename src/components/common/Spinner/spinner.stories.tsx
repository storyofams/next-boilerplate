import React from 'react';

import { Flex, Spinner } from '~/components';

export default {
  component: Spinner,
  title: 'Spinner',
};

export const Basic = () => (
  <Flex p={4}>
    <Spinner />
  </Flex>
);

export const Custom = () => (
  <Flex p={4}>
    <Spinner size={40} color="primary500" />
  </Flex>
);
