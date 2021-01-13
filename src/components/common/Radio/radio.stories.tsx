import React, { useState } from 'react';

import { Box, Radio, RadioGroup } from '~/components';

export default {
  component: Radio,
  title: 'Radio',
  args: {
    children: 'one',
    value: '1',
  },
};

export const Basic = (args) => {
  const [val, setVal] = useState(null);

  return (
    <Box p={4}>
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
