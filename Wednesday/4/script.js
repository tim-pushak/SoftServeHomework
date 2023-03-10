"use strict";

// task 1

function upperCase(str) {
    if (str[0] === str[0].toUpperCase()) {
      console.log("String's starts with uppercase character");
    } else {
      console.log("String does not start with uppercase character");
    }
}

upperCase('regexp');
upperCase('RegExp');

// //// /
  
// task 2

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}

const email = "Qmail2@gmail.com";
const isEmail = checkEmail(email);
console.log(isEmail);
  

// //// /

// task 3

const str = "cdbBdbsbz";
const regex = /(d[bB]+d)/g;
const match = regex.exec(str);

if (match) {
  const [, b, d] = match[1].match(/(b+)(d)/i);
  console.log([match[1], b, d]);
}

// //// /

// task 4

let text = "Java Script";
let swappedText = text.replace(/^(\w+)\s+(\w+)$/, "$2, $1");
console.log(swappedText);

// //// /

// task 5

function checkEmail(email) {
    const emailRegex = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    if (emailRegex.test(email)) {
      console.log("Email is correct!");
    } else {
      console.log("Email is not correct!");
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');

// //// /

// task 6

function checkLogin(login) {
    // Check if the login is between 2 and 10 characters long
    if (login.length < 2 || login.length > 10) {
      return false;
    }
    
    // Check if the first character is a letter
    if (!/^[a-zA-Z]/.test(login)) {
      return false;
    }
    
    // Find all numbers in the login string
    const numbers = login.match(/\d+(\.\d+)?/g);
    
    // Check if there are any numbers and return them
    if (numbers && numbers.length > 0) {
      return [true, ...numbers];
    } else {
      return true;
    }
}

console.log(checkLogin('a1b2c3d4e5')); //[true, "1", "2", "3", "4", "5"]
console.log(checkLogin('ccdodjcods')); //true

console.log(checkLogin('e')); //false
console.log(checkLogin('enjnvdndepD')); //false
console.log(checkLogin('1kmdskvs')); //false
console.log(checkLogin('484828')); //false
// Output: false


// //// /