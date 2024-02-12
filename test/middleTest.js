const assert = require('chai').assert;
const middle = require("../middle");

describe("middle", () => {
  it("should return empty if no middle in array", function() {
    const input = [1];
    const output = [];
    assert.deepEqual(middle(input), output);
  });

  it("should return 2 in the middle", function() {
    const input = [1, 2, 3];
    const output = [2];
    assert.deepEqual(middle(input), output);
  });
});
// //Test Cases:

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

// //Other Test Cases:
// console.log("Other test cases:");
// //Empty Array
// assertArraysEqual(middle([]), []); // => []
// //Long Array Odd
// assertArraysEqual(middle([1, 2, 3, 4, 5, 1, 2, 11, 4, 5, 1, 2, 3, 4, 5]), [11]); // => [11]
// //Long Array Even
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 1, 2, 12, 21, 5, 6, 1, 2, 3, 4, 5, 6]), [12, 21]); // => [12, 21]