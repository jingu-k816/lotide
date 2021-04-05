const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#FindKey', () => {
  it(`should return noma for finding stars with value of 2`, () => {
    const result =
      findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2);

    assert.deepEqual(result, "noma");
  });

  it(`should return 'Blue Hill' for finding stars with value of 1`, () => {
    const result =
      findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 1);

    assert.deepEqual(result, "Blue Hill");
  });

  it(`should return 'Akaleri' for finding stars with value of 3`, () => {
    const result =
      findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 3);

    assert.deepEqual(result, "Akaleri");
  });

});
