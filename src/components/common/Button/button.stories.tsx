import React from 'react';

import { Button } from '~/components';

export default {
  component: Button,
  title: 'components/Button',
  args: { isLoading: false, disabled: false },
};

export const Basic = (args) => <Button {...args}>Lorem Ipsum 7</Button>;

export const Primary = (args) => (
  <Button {...args} variant="primary">
    Lorem Ipsum
  </Button>
);

export const Secondary = (args) => (
  <Button {...args} variant="secondary">
    Lorem Ipsum
  </Button>
);
export const Underline = (args) => (
  <Button {...args} variant="underline">
    Lorem Ipsum
  </Button>
);

export const Link = (args) => (
  <Button {...args} href="/" variant="primary">
    Lorem Ipsum
  </Button>
);
