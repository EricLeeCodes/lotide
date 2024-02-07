const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }

};

const eqArrays = function(arr1, arr2) {
  let isTrue = true;
  if (arr1.length === arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isTrue = true;
      } else {
        isTrue = false;
      }
    }
  } else {
    isTrue = false;
  }
  return isTrue;
};

//Tests for different numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

//Tests for different types
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

//General Test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);