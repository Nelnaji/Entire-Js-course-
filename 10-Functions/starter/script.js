'use strict';


// #1

// const bookings = [];


// // default parameters are argument  = parameter

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

//     // short circuiting either the price and passenger number is set, but if undefined the automatically takes the default value assigned by the || es5 way
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum, numPassengers, price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 2, 800 );
// createBooking("LH123", 2 );
// createBooking("LH123", 6

//  );


// #2

// const flight = 'LH234';
// const nawfal = {
//     name: 'Nawfal Elkhaznagi',
//     passport: 24739479284
// }


// // the object is affected by the function, there are no copies made, while the variable is recreated
// const checkIn = function(flightNum, passenger){
//     flightNum = "LH999";
//     passenger.name = "M. " + passenger.name;
// if(passenger.passport === 24739479284) {
//     alert('Check in')
// }else{
//     alert('Wrong passport!')
// }


// }


// checkIn(flight, nawfal)
// // is the same as doing checkIn
// const flightNum = flight;
// const passenger = nawfal;


// console.log(flight);

// console.log(nawfal)


// const newPassport = function(person) {
//     person.passport =  Math.trunc(Math.random() * 10000000000)
// }

// // the fuction newPassport modified the object nawfal which can create serious problems
// newPassport(nawfal)

// console.log(nawfal)


// #3 High order functions

const oneWord = function(str){
// retire les espaces, et transform toutes les lettres en miniscule
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){

    // we first split the string based on space the first word is placed in the first place in the array, and the others are put in the rest
    const [first,...other]= str.split(' '); 
// we join the whol array, by adding a space between each array value, et the first position in the array is put in upperCase
    return [first.toUpperCase(), ...other].join(' ');

}

// console.log(upperFirstWord("Jelm aparest test es"))

// Higher-order function

const transformer = function(str, fn) {
console.log(`Original string : ${str}`)
console.log(`Transformed string : ${fn(str)}`)

// functions have their own property
console.log(`Transformed by: ${fn.name}`)
// return fn(str);
}

transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)



// JS uses callbacks all the time 
const highFive = function(){
    console.log('👋')
};
// forEach is the higher-order function and highFive is the callback function
['Nawfal', 'Moncef', 'Sanae'].forEach(highFive);