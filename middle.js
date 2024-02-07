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


const middle = function(arr) {
  let newArray = [];
  let middle = 0;

  if (arr.length <= 2) {
    console.log(newArray);
    return newArray;
  } else if (arr.length % 2 === 1) {
    middle = (arr.length - 1) / 2;
    newArray.push(arr[middle]);
  } else {
    middle = (((arr.length - 1) / 2) - 0.5);
    newArray.push(arr[middle]);
    middle = (((arr.length - 1) / 2) + 0.5);
    newArray.push(arr[middle]);
  }
  console.log(newArray);
  return newArray;
}

//Test Cases:

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

//Other Test Cases:
console.log("Other test cases:")
//Empty Array
middle([]) // => [3, 4]
//Long Array Odd
middle([1, 2, 3, 4, 5, 1, 2, 11, 4, 5, 1, 2, 3, 4, 5]) // => [11]
//Long Array Even
middle([1, 2, 3, 4, 5, 6, 1, 2, 12, 21, 5, 6, 1, 2, 3, 4, 5, 6]) // => [12, 21]