const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,"3"]);

// console.log(eqArrays([1,2,3], [1,2,3]));
// console.log(eqArrays([1,2,3], [1,2,"3"]));
