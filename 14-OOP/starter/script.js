'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // you should never have a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const nawfal = new Person('Nawfal', 1993);

console.log(nawfal.firstName);
