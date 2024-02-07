const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ CORRECT!: ${arr1} === ${arr2} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Please try again. ${arr1} !== ${arr2} 🛑🛑🛑`);
  }
};

//Tests for different numbers
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

//Tests for different types
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

//General Test
assertArraysEqual([1, 2, 3], [1, 2, 3]);