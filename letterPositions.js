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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letters = sentence[i];
    if (letters !== " ") {
      if (results[letters]) { // if {l:} exists, we are pushing to the existing value of the key
        results[letters].push(i);
      } else {
        results[letters] = [i]; // if {l: } does not exist, create and set it to the index.
      }
    }
   
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);