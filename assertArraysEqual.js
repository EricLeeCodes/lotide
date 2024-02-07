const eqArrays = function(arr1, arr2) {
  let isTrue;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return isTrue = false;
      } else {
        isTrue = true;
      }
    }
  } else {
    isTrue = false;
  }
  return isTrue;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays) {
    console.log(`CORRECT!: ${arr1} === ${arr2}`);
  } else {
    console.log(`Please try again. ${arr1} !== ${arr2}`);
  }
};

