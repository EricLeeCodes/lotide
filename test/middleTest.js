const middle = require("../middle");
const assertArraysEqual = require('../assertArraysEqual');

//Test Cases:

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

//Other Test Cases:
console.log("Other test cases:");
//Empty Array
assertArraysEqual(middle([]), []); // => []
//Long Array Odd
assertArraysEqual(middle([1, 2, 3, 4, 5, 1, 2, 11, 4, 5, 1, 2, 3, 4, 5]), [11]); // => [11]
//Long Array Even
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 1, 2, 12, 21, 5, 6, 1, 2, 3, 4, 5, 6]), [12, 21]); // => [12, 21]