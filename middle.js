const middle = function (arrayToFindMiddle) {
  const midIndex = arrayToFindMiddle[Math.floor(arrayToFindMiddle.length / 2)];
  const midValue = [];
  if (arrayToFindMiddle.length <= 2) {
    return midValue;
  }

  if (arrayToFindMiddle.length % 2 === 0) {
    midValue.push(midIndex - 1);
    midValue.push(midIndex);
  } else {
    midValue.push(midIndex);
  }

  return midValue;
};

module.exports = middle;