# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ericleecodes/lotide`

**Require it:**

`const _ = require('@ericleecodes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Returns the first element of an array.
* `tail()`: Returns the entire array except for the first element.
* `middle()`: Returns the middle of the array. If there are two elements, it will return both.
* `assertArraysEqual()`: Asserts if two arrays are equal.
* `assertEqual()`: Asserts if two values are strictly equal.
* `eqArrays()`: Checks if two arrays are equal returning a truthy or falsey value.
* `assertObjectsEqual()`: Asserts if two objects are equal.
* `countLetters()`: Counts the letters in a given string.
* `countOnly()`: Counts how many items are in an array.
* `eqObjects()`: Checks if two objects are equal returning truthy or falsey values.
* `findKey()`: Finds the key of an object.
* `findKeyByValue()`: Finds the key of an object by its value.
* `letterPositions()`: Finds the position of a letter in a string.
* `map()`: Returns a new array with a transformed elements.
* `takeUntil()`: Iterates through an array and stops when a specified input is reached.
* `without()`: Removes a specified item from an array.