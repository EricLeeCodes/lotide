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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  } 
  for (const key in results) {
        console.log(key, results[key]);
      }
  return results;
};

let test = "lighthouse in the house";
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);

