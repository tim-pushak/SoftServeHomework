"use strict";


// Task 1

const justArr = [2,3,4,5];
let result = justArr.reduce((a,b)=> a*b);
console.log(result);

const newArr = [2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < newArr; i++) {
    sum *= newArr[i];
}
console.log(sum);

// //// /

// Task 2

for (let i = 0; i < 16; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is ODD 👌`);
    } else if (i % 2 !== 0) {
        console.log(`${i} is EVEN ⓵`);
    } else {
        console.log("It's NaN)");
    }
}

// //// /

// Task 3
// let k = [];
// function randArray(k) {
//     return k += [Math.floor(Math.random() * 10)];
// }
// randArray(5);


let k = [];

function randomNumber(quan) {
    for (let i = 0; i <= quan.length; i++) {
        let num = Math.floor((Math.random() * 4) + 1);
        k.push(num);
        console.log(k);
    }
}

randomNumber(5);
// //// /

// Task 4

function raiseToDegree(a, b) {
    let result = a;   
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return alert(result);
}

const a = +prompt("A?", '');
const b = +prompt("B?", '');

if (Number.isInteger(a) && Number.isInteger(b)) { // ЧОМУ НЕ ПРАЦЮЄ ЧЕРЕЗ ТАКУ УМОВУ...? if (a % 2 == 0 && b % 2 == 0) {..}
    raiseToDegree(a, b);
} else {
    alert("Enter correct number");
}

// //// /

// Task 5

function findMin(minValue) {
    if (toString.call(minValue) !== "[object Array]")
    return false;
    return Math.min.apply(null, minValue);
}
alert(findMin([12, 14, 4, -4, 0.2]));

// //// /

// Task 6 

function findUnique(arr) {

}

const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); 
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
}

findDuplicates([1, 2, 3, 5, 3]);
  
//   let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
//   console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);
  

// //// /