const findKey = function(object, callback) {
  const objectKeys = Object.keys(object);
  for (const keyName of objectKeys) {
    if (callback(object[keyName])) {
      return keyName;
    }
  }
  return undefined;
};

module.exports = findKey;