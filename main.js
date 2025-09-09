function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  } else if (n % 5 === 0) {
    return "Buzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else {
    return n.toString();
  }
}

console.log('fizzBuzz', fizzBuzz(25));

if (typeof module !== "undefined" && module.exports) {
  module.exports = { fizzBuzz };
}
if (typeof window !== "undefined") {
  window.fizzBuzz = fizzBuzz;
}
