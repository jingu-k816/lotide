const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

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

const eqObjects = function (object1, object2){
  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);

  if(keysOfObject1.length !== keysOfObject2.length){
    return false;
  }
  for(const keyName of keysOfObject1){
    if(Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])){
      if(!eqArrays(object1[keyName], object2[keyName])){
        return false;
      }
    }else {
      if(object1[keyName] !== object2[keyName]){
        return false;
      }
    }
  }
  return true;
};
//if (eqArrays(firstArray, secondArray))
const ab = {
  a: '1',
  b: '2'
};
const ba = { 
  b: '2',
  a: '1'
};

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
//console.log(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab,abc), false);

const cd = { 
  c: "1",
  d: ["2", 3] 
};
const dc = { 
  d: ["2", 3], 
  c: "1" 
};
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { 
  c: "1", 
  d: ["2", 3, 4] 
};
assertEqual(eqObjects(cd, cd2), false); // => false