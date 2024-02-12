const tail = require("../tail");
const assertEqual = require('../assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Given Test Case
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//An array with only one element should yield an empty array for its tail
const secondResult = tail(["Hello"]);
assertEqual(secondResult.length, 0);

//An empty array should yield an empty array for its tail
const thirdResult = tail([]);
assertEqual(thirdResult.length, 0);