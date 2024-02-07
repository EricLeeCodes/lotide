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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (const itemSource of source) {
    for (const itemToRemove of itemsToRemove) {
      if (itemToRemove !== itemSource && typeof itemSource === typeof      itemToRemove) {
        newArray.push(itemSource);
      }
    }
  }
  //Check to see if the original array was modified
  console.log(source);
  //Check to see the input of newArray
  console.log(newArray);
  return newArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);