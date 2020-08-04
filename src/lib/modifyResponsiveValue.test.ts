import { modifyResponsiveValue } from './modifyResponsiveValue';

test('works for all kind of responsive data structures', () => {
  expect(modifyResponsiveValue([1, 2, 3], (n) => n + 1)).toEqual([2, 3, 4]);
  expect(modifyResponsiveValue({ a: 1, b: 2 }, (n) => n - 1)).toEqual({
    a: 0,
    b: 1,
  });
  expect(modifyResponsiveValue(12, (n) => n * 2)).toEqual(24);
});
