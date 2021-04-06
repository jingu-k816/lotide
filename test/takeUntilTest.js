const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

describe('#takeUntil', () => {
  it(`should return [1, 2, 5, 7, 2] for the array [1,2,5,7,2,-1,2,4,5] stopping after when the element becomes less than 0`, () => {
    assert.deepEqual(takeUntil([1,2,5,7,2,-1,2,4,5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it(`should return ['I\'ve', 'been', 'to', 'Hollywood'] for array ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] stopping after when the element reaches ","(comma)`, () => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(data, x => x === ","), ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});