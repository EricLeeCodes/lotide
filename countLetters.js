const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

const countLetters = function(string) {
  let results = {};
  if (typeof string === 'string') {
    for (const letter of string) {
      if (letter !== ' ' && results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
    console.log(results);
    return results;
  } else {
    console.log("Please put appropriate inputs.");
  }
};

//Test Cases:
//String:
countLetters("Hello");
//Int
countLetters(12);

let result = countLetters("Hello");
assertEqual(result['H'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 2);
assertEqual(result['o'], 1);