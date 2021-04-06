const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("#FindKeyByValue" , () => {
  it(`should return "drama" when typing a value "The Wire" for object bestTVShowsByGenre` ,() =>{
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it(`should return "undefined" when typing a value "That '70's Show" since the value does not exist in the object` ,() =>{
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it(`should return "comedy" when typing a value "Brooklyn Nine-Nine" for object bestTVShowsByGenre` ,() =>{
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
});
