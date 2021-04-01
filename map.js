const words = ["ground", "control", "to", "major", "tom"];
const names = ["jin", "tom", "james", "nelly", "anthony", "kim"];
const anotherNames = ["tom", 'jin', 'james', 'anthony', 'kim', 'nelly'];

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${firstArray} != ${secondArray}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word);
assertArraysEqual(words, results1); // true and both should be the same

const result2 = map(names, name => name);
assertArraysEqual(names, result2); // true and both should be the same

assertArraysEqual(names, words); // false and both should give different elements.

const result3 = map(anotherNames, anotherName => anotherName);
assertArraysEqual(result2, result3); //false, even if they both same same strings in the array, the address of which these values are stored will be different