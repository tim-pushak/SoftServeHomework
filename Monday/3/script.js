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

const myObj = {
  name: "John",
  age: 30,
  city: "New York",
  job: "Developer",
  isMarried: false
};

function showProps(obj) {
  const propNames = Object.keys(obj);
  const propValues = Object.values(obj);
  
  console.log("Object properties:");
  console.log(propNames);
  
  console.log("Object values:");
  console.log(propValues);
}

showProps(myObj);

// //// /

// Task 3

let car = {
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    color: 'gray',
    mileage: 5000
  };

  function showProps(obj) {
    let propList = Object.keys(obj);
    let valuesList = [];
  
    for (let i = 0; i < propList.length; i++) {
      valuesList.push(obj[propList[i]]);
    }
  
    console.log('Property List:', propList);
    console.log('Values List:', valuesList);
  }

  showProps(car);


// //// /

// task 4

class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.surname} ${this.name}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.surname} ${this.name} ${middleName}`);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      return course > 6 ? 6 : course;
    }
  }

  
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); // Current course: 7


// //// /

// task 5

class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    }
  
    showSalary() {
      const salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary is ${salary}`);
    }
  
    showSalaryWithExperience() {
      const salary = this.dayRate * this.workingDays * this._experience;
      console.log(`${this.fullName} salary is ${salary}`);
    }
  
    get showExp() {
      return this._experience;
    }
  
    set setExp(value) {
      this._experience = value;
    }
  
    static sortBySalary(workers) {
      const sorted = workers.sort((a, b) => {
        const salaryA = a.dayRate * a.workingDays * a._experience;
        const salaryB = b.dayRate * b.workingDays * b._experience;
        return salaryA - salaryB;
      });
  
      sorted.forEach(worker => {
        const salary = worker.dayRate * worker.workingDays * worker._experience;
        console.log(`${worker.fullName}: ${salary}`);
      });
    }
  }
  
  let worker1 = new Worker("John Johnson", 20, 23);
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  let worker3 = new Worker("Andy Ander", 29, 23);
  
  const workers = [worker1, worker2, worker3];
  Worker.sortBySalary(workers);
  

// //// /

// task 5

class GeometricFigure {
    getArea() {
      return 0;
    }
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
  }
  
  class Triangle extends GeometricFigure {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Square extends GeometricFigure {
    constructor(side) {
      super();
      this.side = side;
    }
    getArea() {
      return this.side * this.side;
    }
  }
  
  class Circle extends GeometricFigure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  function handleFigures(figures) {
    const totalArea = figures.reduce((acc, figure) => {
      if (figure instanceof GeometricFigure) {
        console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
        return acc + figure.getArea();
      } else {
        throw new Error("Invalid object type in array");
      }
    }, 0);
    return totalArea;
  }
  
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  console.log(handleFigures(figures));

  
// //// /