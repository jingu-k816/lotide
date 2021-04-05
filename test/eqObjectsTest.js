const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObject", () => {
  it(`should return true for ab, ba being true`, () =>{
    const ab = {
      a: '1',
      b: '2'
    };
    const ba = { 
      b: '2',
      a: '1'
    };
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it(`should return false for ab and abc being false`, ()=>{
    const ab = {
      a: '1',
      b: '2'
    };
    const abc = {
      a: "1",
      b: "2",
      c: "3"
    };
    assert.deepEqual(eqObjects(ab,abc), false);
  });

  it(`should return true when comparing cd and dc`, () => {
    const cd = { 
      c: "1",
      d: ["2", 3] 
    };
    const dc = { 
      d: ["2", 3], 
      c: "1" 
    };

    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it(`shoud return false when comparing cd and cd2`, () =>{
    const cd = { 
      c: "1",
      d: ["2", 3] 
    };

    const cd2 = { 
      c: "1", 
      d: ["2", 3, 4] 
    };
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});
