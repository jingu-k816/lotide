const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;