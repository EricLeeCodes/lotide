const eqArrays = require('./eqArrays');

//Test primitives as values
//Test Arrays as values
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
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = eqObjects;