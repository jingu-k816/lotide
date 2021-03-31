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

const middle = function(arrayToFindMiddle){
  const midIndex = arrayToFindMiddle[Math.floor(arrayToFindMiddle.length /2)];
  const midValue = [];
  if(arrayToFindMiddle.length <= 2){
    return midValue;
  }

    if(arrayToFindMiddle.length % 2 ===0){
      midValue.push(midIndex - 1);
      midValue.push(midIndex);
    }else{
      midValue.push(midIndex);
    }

  return midValue;
}
//TEST CODE

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3, 4]) // => [2, 3]
//console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);