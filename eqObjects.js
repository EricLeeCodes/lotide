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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

const eqObjects = function (object1, object2) {
  let isPerfectMatch = true;
  let object1Array = [];
  let object2Array = [];

  //Putting objects value into arrays
  for(let key in object1) { 
  object1Array.push(object1[key]);
  }
  for(let key in object1) { 
  object2Array.push(object2[key]);
  }

  // Check to see if Array.isArray
  for (const arrayKey of object1Array) {
    if (Array.isArray(arrayKey)) {
      eqObjects(object1Array[arrayKey], object2Array[arrayKey]);
  //else, theyre primitive values
  } else {
    //Checking if the length of both arrays are the same
    if(object1Array.length === object2Array.length){
    for (let i = 0; i < object1Array.length; i++) {
      if (object1Array[i] === object2Array[i]) {
        return isPerfectMatch = true;
      } else {
        return isPerfectMatch = false;
      }
    }
    } else {
      return false;
    }
  }
  return isPerfectMatch;
}
}
//Test Cases:

//Same object, different names
const waterBottle = { material: ["tin", "steel"], size: "small" };
const anotherWaterBottle = { size: "small", material: ["tin", "steel"]}; 
assertEqual(eqObjects(waterBottle, anotherWaterBottle), true);

// Different objects
const shoeObject = { size: "large",  color: "black"};
const pantsObject = { color: "blue", size: "humongous" };
assertEqual(eqObjects(shoeObject, pantsObject), false);