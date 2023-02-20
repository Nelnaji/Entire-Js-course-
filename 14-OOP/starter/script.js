'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // you should never have a method inside a constructor function
//   // this.calcAge = function () {
//   //   console.log(2023 - this.birthYear);
//   // };
// };

// const nawfal = new Person('Nawfal', 1993);

// const sanae = new Person('sanae', 1994);
// console.log(nawfal.firstName);

// // prototypes
// console.log(Person.prototype);
// console.log(typeof nawfal);
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// nawfal.calcAge();
// sanae.calcAge();
// console.log(Person.__proto__);

// console.log(nawfal.__proto__ === Person.__proto__);

// console.log(Person.prototype.isPrototypeOf(nawfal));
// Person.prototype.lastName = 'elkhaznagi';
// console.log(nawfal.hasOwnProperty('firstName'));
// console.log(Person.__proto__);

// const arr = [1, 2, 3, 4, 5, 6];

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const vw = new Car('golf 7', 180);

// console.log(vw);

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
// };

// const PersonCL = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // outside of constructor so that they are linked to prototype
//   // setters and getters
//   // we use _ as a convention
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else {
//       console.log('error baby');
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }
// };

// // challenge #2

// const CarCL = class {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate = function () {
//     this.speed += 10;
//   };
//   brake = function () {
//     this.speed -= 5;
//   };

//   set speedUs(speed) {
//     this.speed *= 1.6;
//   }
//   get speedUs() {
//     return this.speed / 1.6;
//   }
// };

// const audi = new CarCL('tata', 160);


// challenge 3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const vw = new Car('golf 7', 180);


Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};


const Ev = function (make, speed, charge)