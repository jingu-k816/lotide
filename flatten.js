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

const flatten = function(elementsOfNestedArray) {
  const flattenedArray = [];
  for (let i = 0; i < elementsOfNestedArray.length; i++) {
    const currentElement = elementsOfNestedArray[i];
    if (!Array.isArray(currentElement)) {
      flattenedArray.push(currentElement);
    }
    for (let j = 0; j < currentElement.length; j++) {
      flattenedArray.push(currentElement[j]);
    }
  }
  console.log(flattenedArray);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]