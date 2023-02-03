"use strict";

// Task 1

let x = 1;
let y = 2;

let res1 = `${x}` + `${y}`; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = !!x.toString() + `${y}`;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = Number('x') + Number('y');// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

// //// /

// Task 2 /

let number = prompt('Enter ur number');

function checkingNum(num) {
    if ( num % 2 == 0 && num > 0) {
        alert("True: Even & Positive");
    } else if (num < 0) {
        alert("False: Negative Number");
    } else if (num % 2 != 0) {
        alert("False: Odd Number")
    } else if (typeof(num) != Number) {
        alert("Wrong Value");
    }
}

console.log(checkingNum(number));


let multNumber = prompt("Enter number - multiple of 7");

function checkingNum7(num) {
    if (num % 7 == 0) {
        alert("True: Number is Multiple of 7");
    } else if (num % 7 != 0) {
        alert("False: Number isn't Multiple of 7");
    } else if (typeof(num) != Number) {
        alert("Wrong Value");
    }
}

console.log(checkingNum7(multNumber));

// //// /

// Task 3
//
    const array1 = [];
    let nullL = null;

    array1.push(1);
    array1.push("string");
    array1.push(1 < 10); // можливо сюди треба було написати щось типу 2+2 бо я зрозумів логічне значення що це boolean має бути..
    array1.push(nullL);

    console.log(array1);
//

//
    alert(array1.length);
//

//
    let fifthElem = prompt("Enter some value");
    array1.push(fifthElem);
//

//
    alert(array1[4]);
//

//
    array1.shift();
    alert(array1);
//

// //// /

// Task 4

let cities = ["Rome", "Lviv", "Warsaw"];
let newCities = [cities.slice(" ").join("*")];

console.log(cities);
console.log(newCities);

// //// /

// Task 5

let question = prompt('Are you 18?');
let isAdult = question;

function isAdult1(isAdult) {
    if (isAdult < 18) {
        alert(`You have less than 18, you have ${isAdult} years old((`);
    } else if (isAdult >= 18) {
        alert(`Cool you have ${isAdult} years old))`);
    } else if (typeof isAdult == "string") {
        alert('Please enter only numbers');
    }
}

isAdult1(isAdult);



// //// /

// Task 6

let a = +prompt("'A' side");
let b = +prompt("'B' side");
let c = +prompt("'C' side");

function triangle(a, b, c) {
    let result = (a + b + c)/2;
    alert(result);
}

triangle(a, b, c);


function ifTriangleRight(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a)
    return false;
else
    return true;
}

alert(ifTriangleRight(a, b, c));

// //// /

// Task 7

let today = new Date();
let time = today.getHours();
function currentTime(time) {
    if (time >= 23 && time <= 5) {
        alert("Доброї ночі");
    } else if (time > 5 && time <= 11) {
        alert("Доброго ранку");
    } else if (time > 11 && time <= 17) {
        alert("Доброго дня");
    } else if (time > 17 && time <= 23) {
        alert("Доброго вечора");
    }
}

currentTime(time);

// //// /