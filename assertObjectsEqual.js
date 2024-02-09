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

const eqObjects = function(object1, object2) {
  let arrayObject1 = Object.keys(object1);
  let arrayObject2 = Object.keys(object2);
  //Checking length
  if (arrayObject1.length === arrayObject2.length) {
    for (const key of arrayObject1) {
      //Checking if an Array is an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //Checks if the arrays are equal. If true then true.
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      //If the key doesn't match, returns false
      } else if (object1[key] !==  object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ CORRECT!: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Please try again. ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
  }
};


//Testing
const waterBottle = { material: "tin", size: "small" };
const anotherWaterBottle = { size: "small", material: "tin"};
assertObjectsEqual(waterBottle,anotherWaterBottle);