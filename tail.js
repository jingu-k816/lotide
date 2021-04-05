const assertEqual = require('./assertEqual');

// const tail = function(arr) {
//   const newArr = [];
//   if (arr.length <= 1) {
//     return newArr;
//   }
//   for (let i = 1; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// };


//use slice method (was given as a stretch goal from a peer assistant)

const tail = function(arr){
  const newArr = arr.slice(1);

  return newArr;
}


module.exports= tail;