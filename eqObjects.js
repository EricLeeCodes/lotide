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

//Test primitives as values
//Test Arrays as values
const eqObjects = function (object1, object2) {
  let arrayObject1 = Object.keys(object1);
  let arrayObject2 = Object.keys(object2);
  console.log(arrayObject1, arrayObject2);
  // Compare primitive values
  for (const key of arrayObject1) {
    if (arrayObject1.length === arrayObject2.length && object1[key] === object2[key]) {
      return true;
      // Compare Array values
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key], object2[key]);
    } else if (arrayObject1.length !== arrayObject2.length || object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
//Test Cases:

//Same object, different names
const waterBottle = { material: "tin", size: "small" };
const anotherWaterBottle = { size: "small", material: "tin"};
assertEqual(eqObjects(waterBottle, anotherWaterBottle), true);

//Same object, different names arrayed
const waterBottleArrayed = { material: ["tin", "steel"], size: "small" };
const anotherWaterBottleArrayed = { size: "small", material: ["tin", "steel"]};
assertEqual(eqObjects(waterBottleArrayed, anotherWaterBottleArrayed), true);

// Different objects
const shoeObject = { size: "large",  color: "black"};
const pantsObject = { color: "blue", size: "humongous" };
assertEqual(eqObjects(shoeObject, pantsObject), false);

// Mismatched Lengths
const shoeObject2 = { size: "large",  color: "black", isShoe: true};
const pantsObject2 = { color: "blue", size: "humongous" };
assertEqual(eqObjects(shoeObject2, pantsObject2), false);