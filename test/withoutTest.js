const assert = require("chai").assert;
const without = require("../without");

describe('#without', () => {
  it(`should return [2, 3] for array [1, 2, 3], taking out 1 from the array`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it(`should return ["1", "2"] for array ["1", "2", "3"] when taking out [1, 2, "3"] array.`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it(`should not change the original array when using without function`, () => {
    const arr = ["hello", "world", "lighthouse"];
    without(["hello", "world", "lighthouse"], "lighthouse");
    assert.deepEqual(arr, ["hello", "world", "lighthouse"]);
  });
});