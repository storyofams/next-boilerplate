import React from 'react';
import { render } from 'test-utils';
import theme from '~/styles/theme';

import StatusMessage from './StatusMessage';

function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(')')[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length === 1) r = '0' + r;
  if (g.length === 1) g = '0' + g;
  if (b.length === 1) b = '0' + b;

  return '#' + r + g + b;
}

test('receives change events', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="default">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.grey900.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
test('handles status success', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="success">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.success500.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
test('handles status warning', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="warning">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.warning500.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
test('handles status error', async () => {
  const { getByTestId } = render(
    <StatusMessage data-testid="test" status="error">
      Test
    </StatusMessage>,
  );
  const element = getByTestId('test');
  const style = window.getComputedStyle(element);
  const themeColor = theme.colors.error500.toLowerCase();
  const elementColor = RGBToHex(style.color);

  expect(elementColor).toBe(themeColor);
});
