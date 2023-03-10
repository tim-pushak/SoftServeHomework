"use strict";

// task 1

function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw new Error('ERROR VASYA!!!');
    }

    return width * height;
}

calcRectangleArea(5, 10);

// //// /

// task 2

let emptyString = new Error("The field is empty! Please enter your age");
let notANumber = new Error("Please enter only numbers");
let lessThanF = new Error("Less than 14");

function checkAge() {
   let age = prompt("Enter your age");

    if (age.length <= 0) {
        return alert(`${emptyString}`);
    } else if (isNaN(age)) {
        return alert(`${notANumber}`);
    } else if (age < 14) {
        return alert(`${lessThanF}`);
    } else {
        return alert("access allowed");
    }
}

checkAge();

// //// /

// task 3 

class MonthException {
  constructor(message) {
    this.name = 'MonthException';
    this.message = message;
  }
}

function showMonthName(month) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if (month >= 1 && month <= 12) {
    return months[month - 1];
  } else {
    throw new MonthException('Incorrect month number');
  }
}

try {
  console.log(showMonthName(10));
  console.log(showMonthName(14));
} catch (e) {
  console.log(e.name, e.message);
}

// //// 

// task 4

function showUser(id) {
    if (id < 0) {
      throw new Error("ID must not be negative: " + id);
    }
    return { id: id };
  }
  
  function showUsers(ids) {
    let result = [];
    for (let i = 0; i < ids.length; i++) {
      try {
        let user = showUser(ids[i]);
        result.push(user);
      } catch (e) {
        console.error(e.message);
      }
    }
    return result;
  }

  showUsers([7, -12, 44, 22]);
  
// ////

