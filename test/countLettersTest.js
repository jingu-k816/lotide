const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#CountLetters", () => {
  it(`should return 1 when passing in "lighthouse in the house" and count the l's in a string`, () =>{
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result["l"], 1);
  });
  it(`should return 4 when passing in "lighthouse in the house" and count the h's in a string`, () =>{
    const result = countLetters("lighthouse in the house");
    assert.strictEqual(result["h"], 4);
  });
})