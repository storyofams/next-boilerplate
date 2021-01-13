import React from 'react';

import { Toggle } from '~/components';

export default {
  component: Toggle,
  title: 'components/Toggle',
  argTypes: { onChange: { action: 'toggled' } },
  parameters: { controls: { hideNoControlsWarning: true } },
};

export const Basic = (args) => <Toggle {...args} />;
