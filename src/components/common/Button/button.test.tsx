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

test('has loading state when loading prop is passed', () => {
  const { getByTestId } = render(
    <Button data-testid="Button" isLoading>
      button
    </Button>,
  );
  const element = getByTestId('Button');

  const hasDataIsLoadingAttribute = element.attributes.getNamedItem(
    'data-is-loading',
  );
  expect(hasDataIsLoadingAttribute).toBeTruthy();
});

test('has loading state when href prop is passed', () => {
  const { getByRole } = render(<Button href="/">button</Button>);
  const element = getByRole('link');

  const hasAttribute = element.attributes.getNamedItem('href');
  expect(hasAttribute).toBeTruthy();
});

test('has loading state when to prop is passed', async () => {
  const to = '/link';
  const { findByTestId } = render(
    <Button data-testid="NextLink" to={to}>
      button
    </Button>,
  );
  const element = await findByTestId('NextLink');

  const hasAttribute = element.parentElement.attributes.getNamedItem('href');
  expect(hasAttribute).toBeTruthy();
  expect(hasAttribute.value).toBe(to);
});
