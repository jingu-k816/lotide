const assert = require("chai").assert;
const map = require("../map");

describe('#Map', () =>{
  it(`should return true for mapping an array`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, word => word);
    assert.deepEqual(words, result);
  });

  it(`should return true for mapping an array`, () => {
    const names = ["jin", "tom", "james", "nelly", "anthony", "kim"];
    const result = map(names, name => name);
    assert.deepEqual(names, result);
  })

  it(`should return false when mapping through two different arrays`, () => {
    const words = map(["ground", "control", "to", "major", "tom"], word => word);
    const names = map(["jin", "tom", "james", "nelly", "anthony", "kim"], name => name);
    assert.notDeepEqual(words, names);
  });

  it(`should return false when mapping through the same array but in different indices`, () => {
    const names = map(["jin", "tom", "james", "nelly", "anthony", "kim"], name => name);
    const anotherNames = map(["tom", 'jin', 'james', 'anthony', 'kim', 'nelly'], anotherName => anotherName);
    assert.notDeepEqual(names, anotherNames);
  })
});