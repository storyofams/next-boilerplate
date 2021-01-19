import React, { useState } from 'react';
import { Box } from 'rebass/styled-components';

import { Radio, RadioGroup } from '~/components';

export default {
  component: Radio,
  title: 'components/Radio',
  args: {
    children: 'one',
    value: '1',
  },
};

export const Basic = (args) => {
  const [val, setVal] = useState(null);

  return (
    <Box>
      <RadioGroup value={val} onChange={setVal}>
        <Radio data-testid="radio-1" {...args} />
        <Radio value="2">two</Radio>
        <Radio data-testid="radio-3" value="3">
          three
        </Radio>
      </RadioGroup>
    </Box>
  );
};
