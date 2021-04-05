const assert = require("chai").assert;
const tail = require("../tail");


describe('Tail Function', () => {
  it("returns 2 for checking the length of ['Hello', 'Lighthouse' , 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]).length;
    assert.deepEqual(result, 2);
  });

  it("returns 'Lighthouse' for checking the first index of ['Hello', 'Lighthouse' , 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[0], 'Lighthouse');
  });

  it("returns 'Labs' for checking the last index of ['Hello', 'Lighthouse' , 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[1], 'Labs');
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse' , 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
});

// assertEqual(results[1], "Labs"); // ensure second element is "Labs"


// // // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!