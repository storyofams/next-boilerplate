import React, { useState } from 'react';
import { Radio, RadioGroup } from '~/components';

export default {
  component: Radio,
  title: 'Radio',
};

export const InRadioGroup = () => {
  const [val, setVal] = useState(null);

  return (
    <>
      <RadioGroup value={val} onChange={setVal}>
        <Radio data-testid="radio-1" value="1">
          one
        </Radio>
        <Radio value="2">two</Radio>
        <Radio data-testid="radio-3" value="3">
          three
        </Radio>
      </RadioGroup>
    </>
  );
};
