const countLetters = function(stringToCount) {
  const noSpaces = stringToCount.split(" ").join("");

  const savedLetters = {};

  for (const letters of noSpaces) { //lighthouseinthehouse
    if (savedLetters[letters]) { //if this exists{l: } then increment ... etc
      savedLetters[letters]++;
    } else { //otherwise {l: 1} ... etc
      savedLetters[letters] = 1;
    }
  }

  return savedLetters;
};

module.exports = countLetters;