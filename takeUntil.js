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

const takeUntil = function(array, callback) {
  const sliced = [];
  for (const elem of array) {
    if (callback(elem)) {
      break;
    } else {
      sliced.push(elem);
    }
  }

  return sliced;
};

//"slice of the array with elements taken from the beginning."

const data1 = [1,2,5,7,2,-1,2,4,5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1); // [1,2,5,7,2] so returning the values until the element becomes less than 0
console.log('---------');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // ['I\'ve', 'been', 'to', 'hollywood'] returns until when the x is equal to ","

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
