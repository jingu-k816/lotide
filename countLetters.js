const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

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

console.log(countLetters("lighthouse in the house"));

const results = countLetters("lighthouse in the house");
assertEqual(results["l"], 1);
assertEqual(results["h"], 4);