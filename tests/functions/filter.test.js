const functions = require("../../functions");

// Write a simple filter implementation
test("functions.filter takes an array as the first parameter, a function as the second parameter, and only returns elements for which the function returns true", function() {
  const expected = [2];
  const actual = functions.filter([1, 2, 3], function(n) {
    return n % 2 === 0;
  });
  expect(actual).toEqual(expected);
});
