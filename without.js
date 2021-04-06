const without = function(sourceArray, itemsToRemove) {
  const result = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemove.includes(sourceArray[i])) {
      result.push(sourceArray[i]);
    }

  }
  return result;
};

module.exports = without;