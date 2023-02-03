"use strict";


// Task 1

const justArr = [2,3,4,5];
let result = justArr.reduce((a,b)=> a*b);
console.log(result);

const newArr = [2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < newArr; i++) {
    sum = sum * newArr[i];
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

function randArray(k) {

}

// //// /

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
}

function propsCount(currentObject) {
    return console.log(Object.keys(currentObject).length);
}

propsCount(mentor);