const tail = require("../tail");
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
const results = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(results.length, 2); // ensure we get back two elements
assertEqual(results[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(results[1], "Labs"); // ensure second element is "Labs"


// // Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!