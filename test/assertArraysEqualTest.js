const assertArraysEqual = require("../assertArraysEqual");



//Tests for different numbers
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

//Tests for different types
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

//General Test
assertArraysEqual([1, 2, 3], [1, 2, 3]);