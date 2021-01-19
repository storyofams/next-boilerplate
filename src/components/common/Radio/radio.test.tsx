import React from 'react';
import { render, fireEvent } from 'test-utils';
import RadioGroup from './components/RadioGroup';

import { Basic } from './radio.stories';

const args = {
  children: 'one',
  value: '1',
};

test('receives change events', async () => {
  // have to provide args/props, since we are rendering a story that expects it
  const { getByLabelText, getByTestId } = render(<Basic {...args} />);
  const firstRadio: any = getByLabelText(/one/i);

  expect(firstRadio.checked).toBeFalsy();

  const firstLabel = getByTestId('radio-1');
  fireEvent.click(firstLabel);

  expect(firstRadio.checked).toBeTruthy();
});

test('handles non valid element', async () => {
  const nonValidReactElement = 'Test';
  const { getByRole } = render(
    <RadioGroup value={null} onChange={null}>
      {nonValidReactElement}
    </RadioGroup>,
  );
  const element = getByRole('radiogroup');

  expect(element.innerHTML).toBe(nonValidReactElement);
});
