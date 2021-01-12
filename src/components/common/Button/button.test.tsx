import React, { useEffect, useRef } from 'react';
import { Button } from '~/components';
import { fireEvent, render } from '~/lib';

test('registers event handlers', () => {
  const clickHandler = jest.fn();
  const { getByText } = render(<Button onClick={clickHandler}>button</Button>);

  fireEvent.click(getByText('button'));

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

const Component = ({ refHandler }) => {
  const ref = useRef<HTMLButtonElement>();

  useEffect(() => {
    if (ref.current) {
      ref.current.click();
    }
  });

  return (
    <Button ref={ref} onClick={refHandler}>
      button
    </Button>
  );
};

test('forwards ref', () => {
  const refHandler = jest.fn();
  render(<Component refHandler={refHandler} />);

  expect(refHandler).toHaveBeenCalledTimes(1);
});
