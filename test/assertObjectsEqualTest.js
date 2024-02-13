const assertObjectsEqual = require('../assertObjectsEqual');

//Testing
const waterBottle = { material: "tin", size: "small" };
const anotherWaterBottle = { size: "small", material: "tin" };
assertObjectsEqual(waterBottle, anotherWaterBottle);