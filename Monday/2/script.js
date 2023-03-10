"use strict";


// // Task 1

// const justArr = [2,3,4,5];
// let result = justArr.reduce((a,b)=> a*b);
// console.log(result);

// const newArr = [2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < newArr; i++) {
//     sum *= newArr[i];
// }
// console.log(sum);

// // //// /

// // Task 2

// for (let i = 0; i < 16; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} is ODD 👌`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} is EVEN ⓵`);
//     } else {
//         console.log("It's NaN)");
//     }
// }

// // //// /

// // Task 3
// function randArray(k) {
//     const arr = [];
//     for (let i = 0; i < k; i++) {
//       arr.push(Math.floor(Math.random() * 500) + 1);
//     }
//     return arr;
// }

// const arr = randArray(5);
// console.log(arr);
  

// // Task 4

// function raiseToDegree(a, b) {
//     let result = a;   
//     for (let i = 1; i < b; i++) {
//         result *= a;
//     }
//     return alert(result);
// }

// const a = +prompt("A?", '');
// const b = +prompt("B?", '');

// if (Number.isInteger(a) && Number.isInteger(b)) { // ЧОМУ НЕ ПРАЦЮЄ ЧЕРЕЗ ТАКУ УМОВУ...? if (a % 2 == 0 && b % 2 == 0) {..}
//     raiseToDegree(a, b);
// } else {
//     alert("Enter correct number");
// }

// // //// /

// // Task 5

// function findMin(minValue) {
//     if (toString.call(minValue) !== "[object Array]")
//     return false;
//     return Math.min.apply(null, minValue);
// }
// alert(findMin([12, 14, 4, -4, 0.2]));

// // //// /

// // Task 6 

// function findUnique(arr) {
//     let uniqueSet = new Set(arr); // create a set from the array
//     return uniqueSet.size === arr.length; // compare set size with array length
// }

// console.log(findUnique([1, 2, 3, 5, 3])); // => false
// console.log(findUnique([1, 2, 3, 5, 11])); // => true

// // //// /

// task 7

function lastElem(arr, x = 1) {
    if (x >= arr.length) {
      return arr;
    } else if (x === 1) {
      return arr[arr.length - 1];
    } else {
      return arr.slice(-x);
    }
}
  
  
console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

// //// /

// task 8

function capitalizeWords(str) {
    // split the string into an array of words
    let words = str.split(' ');
  
    // iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
      // convert the first letter of the word to uppercase
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    // join the words back into a string and return it
    return words.join(' ');
}

let inputString = 'i love java script';
let outputString = capitalizeWords(inputString);
console.log(outputString); // prints "I Love Java Script"

// //// /