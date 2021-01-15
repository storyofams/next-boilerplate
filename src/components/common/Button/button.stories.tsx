import React from 'react';

import { Button } from '~/components';

export default {
  component: Button,
  title: 'components/Button',
  args: { isLoading: false, disabled: false },
};

export const Primary = (args) => (
  <Button {...args} variant="primary">
    Lorem Ipsum
  </Button>
);

Primary.args = {
  variant: 'primary',
};

export const Secondary = (args) => (
  <Button {...args} variant="secondary">
    Lorem Ipsum
  </Button>
);

Secondary.args = {
  variant: 'secondary',
};

export const Underline = (args) => (
  <Button {...args} variant="underline">
    Lorem Ipsum
  </Button>
);

Underline.args = {
  variant: 'underline',
};

export const Link = (args) => (
  <Button {...args} href="/" variant="primary">
    Lorem Ipsum
  </Button>
);

Link.args = {
  variant: 'link',
};
