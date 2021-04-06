const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letters = sentence[i];
    if (letters !== " ") {
      if (results[letters]) { // if {l:} exists, we are pushing to the existing value of the key
        results[letters].push(i);
      } else {
        results[letters] = [i]; // if {l: } does not exist, create and set it to the index.
      }
    }
   
  }
  return results;
};

module.exports = letterPositions;