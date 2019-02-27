// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
let x = 2;
let y = 3;
let list = items;
let item = 'yo-yo';
const array = [1,2,3,4,5,6,2,3,4,7,8,9];
const cleanArray = [];
/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

//getLength invocation 
getLength(items, function(length){
  console.log(length)
});


function lastItem(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
}

//lastItem invocation 
lastItem(items, function(last){
  console.log(last)
});


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

//sumNums invocation
sumNums(x, y, function(sum){
  console.log(sum)
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

//multiplyNums invocation
multiplyNums(x, y, function(product){
  console.log(product)
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (cb(list.includes(item)))
    return true;
    else return false;
}

//contains invocation
contains(item, list, function(match){
  console.log(match)
});

/* STRETCH PROBLEM */

function removeDuplicates(array) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate-free array to the callback function.
  // Do not mutate the original array.
  return array.filter(function(array, index){
    return array.indexOf(array) >= index;
  })
}
//invoke removeDuplicates
console.log(array);