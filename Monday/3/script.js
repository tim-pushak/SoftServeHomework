"use strict";

// Task 1

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
}

function propsCount(currentObject) {
    return console.log(Object.keys(currentObject).length);
}

propsCount(mentor);

// //// /

// Task 2

const someObj = {
    firstField: "one",
    seconfField: 2,
    thirdField: "third",
    fourthField: 4,
    fifthField: "fifth"
};

function showProps(obj) {
    let arr = [Object.keys(someObj)];
    let  values = [Object.values(someObj)];
    
    console.log(arr);
    console.log(values);
}

showProps(someObj);

// //// /

// Task 3

// class Person {
//     constructor (name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     showFullName() {
//         alert(`Name: ${this.name}, Surname: ${this.surname}`)
//     }
// }

// class Student extends Person {
//     constructor (name, surname, middleName, year) {
//         super(name, surname);
//         this.middleName = middleName;
//         this.year = year;
//     }

//     middleName() {
//         alert(`${super.showFullName}, Surname: ${this.middleName}`);
//     }
// }

// let creating = new Student();
// alert(creating.middleName);

// // //// /

// // Task 5

// class Worker {
//     constructor (fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalary() {
//         return this.dayRate * this.workingDays;
//     }

//     showSalaryWithExperience() {
//         return super.showSalary * 1.5;
//     }
// }

// // //// /

// // Task 6

// class GeometricFigure {
//     getArea();
//     toString(e) {
//         let nameClass = document.getElementsByClassName(`.${e}`);
//         let classes = nameClass.className;
//         console.log(classes);
//     }
// }

// //// /