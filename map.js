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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test Cases:

//First letter of each array
const results1 = map(words, word => word[0]);
console.log(results1);

//Adding a string to the array
const results2 = words.map((x) => x + " carrot");
assertArraysEqual(results2, ['ground carrot', 'control carrot', 'to carrot', 'major carrot', 'tom carrot']);

//Returns length of the word
const results3 = map(words, word => word.length);
console.log(results3);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

//Check to see if it can be written differently
const results4 = words.map((x) => x.length);
console.log(results4);