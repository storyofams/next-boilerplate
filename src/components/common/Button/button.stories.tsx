import React from 'react';

import { Button, Stack } from '~/components';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = () => (
  <Stack alignItems="flex-start" p={4} space={3} flexDirection="column">
    <Button variant="primary">Lorem Ipsum</Button>
    <Button variant="primary" isLoading>
      Lorem Ipsum
    </Button>
    <Button variant="primary" disabled>
      Lorem Ipsum
    </Button>
  </Stack>
);
export const Outline = () => (
  <Stack alignItems="flex-start" p={4} space={3} flexDirection="column">
    <Button variant="outline">Lorem Ipsum</Button>
    <Button variant="outline" isLoading>
      Lorem Ipsum
    </Button>
    <Button variant="outline" disabled>
      Lorem Ipsum
    </Button>
  </Stack>
);
export const Secondary = () => (
  <Stack alignItems="flex-start" p={4} space={3} flexDirection="column">
    <Button variant="secondary">Lorem Ipsum</Button>
    <Button variant="secondary" isLoading>
      Lorem Ipsum
    </Button>
    <Button variant="secondary" disabled>
      Lorem Ipsum
    </Button>
  </Stack>
);
export const Underline = () => (
  <Stack alignItems="flex-start" p={4} space={3} flexDirection="column">
    <Button variant="underline">Lorem Ipsum</Button>
    <Button variant="underline" isLoading>
      Lorem Ipsum
    </Button>
    <Button variant="underline" disabled>
      Lorem Ipsum
    </Button>
  </Stack>
);

export const Link = () => (
  <Stack alignItems="flex-start" p={4} space={3} flexDirection="column">
    <Button href="/" variant="primary">
      Lorem Ipsum
    </Button>
    <Button href="/" variant="primary" isLoading>
      Lorem Ipsum
    </Button>
    <Button href="/" variant="primary" disabled>
      Lorem Ipsum
    </Button>
  </Stack>
);
