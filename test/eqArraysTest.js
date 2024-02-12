const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//Tests for different numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

//Tests for different types
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

//General Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);