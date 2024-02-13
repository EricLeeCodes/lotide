const eqObjects = require('../eqObjects');
const assertEqual = require('../assertEqual');



//Test Cases:
//Same object, different names arrayed
const waterBottleArrayed = { material: ["tin", "steel"], size: "small" };
const anotherWaterBottleArrayed = { size: "small", material: ["tin", "steel"] };
assertEqual(eqObjects(waterBottleArrayed, anotherWaterBottleArrayed), true);

//Same object, different names
const waterBottle = { material: "tin", size: "small" };
const anotherWaterBottle = { size: "small", material: "tin" };
assertEqual(eqObjects(waterBottle, anotherWaterBottle), true);

// Different objects
const shoeObject = { size: "large", color: "black" };
const pantsObject = { color: "blue", size: "humongous" };
assertEqual(eqObjects(shoeObject, pantsObject), false);

// Mismatched Lengths
const shoeObject2 = { size: "large", color: "black", isShoe: true };
const pantsObject2 = { color: "blue", size: "humongous" };
assertEqual(eqObjects(shoeObject2, pantsObject2), false);