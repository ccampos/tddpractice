const { fizzBuzz } = require('./main');

test('returns 1 since not divisible by 3 or 5', () => {
  expect(fizzBuzz(1)).toBe('1');
})

test('returns Fizz since is only divisible by 3', () => {
  expect(fizzBuzz(9)).toBe('Fizz');
})

test('returns Buzz since it\'s only divisible by 5', () => {
  expect(fizzBuzz(25)).toBe('Buzz');
})

test('returns FizzBuzz since it\'s divisible by 3 and 5', () => {
  expect(fizzBuzz(30)).toBe('FizzBuzz');
})

test('returns Fizz for negative divisible by 3', () => {
  expect(fizzBuzz(-12)).toBe('Fizz');
})
