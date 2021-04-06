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

module.exports = takeUntil;