const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

//TEST CODE

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3, 4]); // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
