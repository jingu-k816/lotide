const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe('#letterPosition', () => {
  it(`should return [3, 5, 15, 18] for sentence 'lighthouse in the house'.h to find out in which index has a letter "h"` , () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});