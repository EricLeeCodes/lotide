const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected + " ✅✅✅");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected + " 🛑🛑🛑");
  }

};

//Given test case
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//Comparing identical strings
assertEqual("Hello World", "Hello World");

//Comparing non-identical strings
assertEqual("Hello Moon","Hello World");

//Comparing identical numbers
assertEqual(3,3);

//Comparing non-identical numbers
assertEqual(1,7);