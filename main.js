function unique(arr) {
  const seen = new Set();
  const result = [];
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}

console.log('unique', unique([2, 6, 6, 9, 4, 6, 8, 10, 9]));

if (typeof module !== "undefined" && module.exports) {
  module.exports = { unique };
}
if (typeof window !== "undefined") {
  window.unique = unique;
}
