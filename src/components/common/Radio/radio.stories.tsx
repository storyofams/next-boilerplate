import React, { useState } from 'react';
import { Box } from 'rebass/styled-components';

import { Radio, RadioGroup } from '~/components';

export default {
  component: Radio,
  title: 'Radio',
};

export const Basic = () => {
  const [val, setVal] = useState(null);

  return (
    <Box p={4}>
      <RadioGroup value={val} onChange={setVal}>
        <Radio data-testid="radio-1" value="1">
          one
        </Radio>
        <Radio disabled data-testid="radio-2" value="2">
          two
        </Radio>
        <Radio data-testid="radio-3" value="3">
          three
        </Radio>
      </RadioGroup>
    </Box>
  );
};
