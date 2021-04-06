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
  return flattenedArray;
};

module.exports = flatten;