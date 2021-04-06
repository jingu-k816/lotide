# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jinguk0816/lotide`

**Require it:**

`const _ = require('@jinguk0816/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: A function that takes in an array and returns the first element of an array.
* `tail(...)`: A functon that takes in an array then takes out the first element of an array and returns the remaining elements in an array. (Changed the original array)
* `middle(...)`: A function that takes in an array then returns the middle value of an array.
* `countLetter(...)`: A function that passes in a string then returns the value of the specific letter that occured in the string. Spaces will be ignored in the return. Example) "lighthouse in the house" -> const result = countLetter("lighthouse in the house") -> result["h"] will return 4 
* `countOnly(...)`: A function that takes in an object as first and second parameters and returns counts for a specific subset of those object. It won't count everything. In order to decide what to count, it will also be given an idea of which keys the user cares about and it will only count those, ignoring the others.
* `findKey(...)`: A function that takes in an object and callback function then returns the first key name of the callback function's return value.
* `findKeyByValue(...)`: A function that takes in an object as first parameter and a string as the second parameter. If the second parameter matches what is in the object's value received in the first parameter, a function returns the key name of the object that matchest the object's value
* `eqArrays(...)`: A function that takes in 2 sets of arrays then returns truthy and falsy depending on if the arrays are the same or not.
* `eqObjects(...)`: A function that takes in 2 sets of objects and compares if both objects are same then returns truthy or falsy back to the console.
* `flatten(...)`: A function that takes in an array and if the array has nested arrary inside the argument, it flattens out the nested array into an element and returns the flattened out array.
* `letterPositions(...)`: A similar function with countLetter but instead this returns the indices of where the specific letter is.
* `map(...)`: A function that takes in an array and goes through the array then returns the the values in an array format.
* `takeUntil(...)`: A function that that takes array and callback as arguments, returns the slice of the array with elements taken from the beginning until the callback returns the truthy value.
* `without(...)`: A function that takes in an array and string as an input then retuns the array without the input string.

