const { unique } = require('./main');

test('removes duplicates from array', () => {
  expect(unique([1, 6, 4, 6, 8])).toEqual([1, 6, 4, 8]);
})

test('removes duplicates from array', () => {
  expect(unique([3, 5, 3, 9, 1, 9, 4])).toEqual([3, 5, 9, 1, 4]);
})
