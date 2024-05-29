'use strict';

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


const flight = 'LH234';
const nawfal = {
    name: 'Nawfal Elkhaznagi',
    passport: 24739479284
}


// the object is affected by the function, there are no copies made, while the variable is recreated
const checkIn = function(flightNum, passenger){
    flightNum = "LH999";
    passenger.name = "M. " + passenger.name;
if(passenger.passport === 24739479284) {
    alert('Check in')
}else{
    alert('Wrong passport!')
}


}


checkIn(flight, nawfal)
// is the same as doing checkIn
const flightNum = flight;
const passenger = nawfal;


console.log(flight);

console.log(nawfal)


const newPassport = function(person) {
    person.passport =  Math.trunc(Math.random() * 10000000000)
}

newPassport(nawfal)

console.log(nawfal
)