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

// const oneWord = function(str){
// // retire les espaces, et transform toutes les lettres en miniscule
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){

//     // we first split the string based on space the first word is placed in the first place in the array, and the others are put in the rest
//     const [first,...other]= str.split(' '); 
// // we join the whol array, by adding a space between each array value, et the first position in the array is put in upperCase
//     return [first.toUpperCase(), ...other].join(' ');

// }

// // console.log(upperFirstWord("Jelm aparest test es"))

// // Higher-order function

// const transformer = function(str, fn) {
// console.log(`Original string : ${str}`)
// console.log(`Transformed string : ${fn(str)}`)

// // functions have their own property
// console.log(`Transformed by: ${fn.name}`)
// // return fn(str);
// }

// transformer('JavaScript is the best!', upperFirstWord)
// transformer('JavaScript is the best!', oneWord)



// // JS uses callbacks all the time 
// const highFive = function(){
//     console.log('👋')
// };
// // forEach is the higher-order function and highFive is the callback function
// ['Nawfal', 'Moncef', 'Sanae'].forEach(highFive);


// #4 function that return a function

// const greet = function(greeting) {

//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// // storing the function in a variable
// const salam = greet('Salam');

// salam('Nawfal')
// salam('Mohamed')


// rewriting using arrow functions

// const greet = greeting => {
//         return  name => console.log(`${greeting} ${name}`) 
// }

// // teachers way

// const greetArr = greeting => name =>  console.log(`${greeting} ${name}`) 

// greet('Hello')('AbdelKader')

// greetArr('Salam')('Ali')

// #5 the call and apply method

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings:[],
//     // book: function(){},
//     book(flightNum, name) {
// console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);

// this.bookings.push({flight:`${this.iataCode}${flightNum}`, name})
//     },
// };


// lufthansa.book(756, 'Elkhaznagi Nawfal')
// lufthansa.book(235, 'Malcom X')



// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings:[],
//     // book: function(){},
    
// };

// // the book function is actually a copy of the lufthansa.book method, but it is outside of the object. so the this keyword needs to be redefined via call bind or apply
// const book = lufthansa.book

// // book(278, "Ali Ghali") doesn't work because this is undefined

// // on peux appliqué une methode a la function book, car toute function est un type d'objet.
// // call method
// book.call(eurowings, 698, 'Ali Ghali')

// console.log(eurowings)


// book.call(lufthansa,888, "ahlan Sahlan")
// console.log(lufthansa)

// // apply method

// //                difference between call and apply ? call accepts arguments, while
// //                                           apply  accepts an array of argument

// const flightData = [586, 'Georgio Armani']
// book.apply(lufthansa, flightData)

// book.apply(eurowings, [874, 'Name plate'])

// // the apply method is no longer used because we can use the call method with a ... call is also much faster
// book.call(eurowings, ...flightData)

// // #5 Bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(784, "Steven Williams")

// // we have already set the flightNum as 23 so we only need to add a name
// // this pattern is called partial application
// const bookEW232 = book.bind(eurowings, 232);

// bookEW232('Martha Johns');
// bookEW232('William Johston')

// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }

// const planeBuying = lufthansa.buyPlane
// const buyBtn = document.querySelector('.buy');
// buyBtn.addEventListener('click', planeBuying.bind(lufthansa))

// // Partial application
// // rate/100 instantly transform the rate to a percentage
// const addTax = (rate,value) => value + value * rate/100 

// console.log(addTax(10, 200))
// // partial application
// // bind(thisArg, Arg1, Arg2 , ..., ArgN)
// // ont utilise null par convention
// const addVAT = addTax.bind(null, 23)

// console.log(addVAT(300))


// const addTax = (rate,value) => value + value * rate;

// const addVAT = value => addTax(0.23, value)

// const addTaxRate = function (rate) {

//     return function (value) {
//         return  value + value * rate;
//     };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(235))

// 
// 
//  coding challenge #1
// 
// 

// const pollBtn = document.querySelector('.poll');

// const poll = {

//     question: "What is your favourite programming language?",
//     options: ['0:JavaScript', '1:Python', '2:Rust', '3: C++'],
//     answers: new Array(4).fill(0),

//     registerNewAnswer() {


//         let answer = Number(prompt(`What is your favourite programming language?
//         0:JavaScript
//         1:Python
//         2:Rust
//         3: C++
//         (Write option number)`));


//         if (answer < 0 || answer > 3) {
//             alert(`Wrong answer 
//             Please type a number between 0 and 3'`)
//             console.log(answer)
//         } else if (answer == NaN) {
//             alert(`Wrong answer 
//             Please type numbers only between 0 and 3'`)
//             console.log(answer)

//         }
//     },

    

//     displayResults(type){

//         if (typeof type === "string")

//     }

// }

// pollBtn.addEventListener('click', poll.registerNewAnswer)

// console.log(poll.answers)



// 
// 
// Teacher's answer

// const pollBtn = document.querySelector('.poll');
// const poll = {

//     question: "What is your favourite programming language?",
//     options: ['0:JavaScript', '1:Python', '2:Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
//        console.log(answer)
        
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
//         this.displayResults();
//         this.displayResults('string');
    
//     },

//     displayResults(type = 'array') {
//          if (type === 'array'){
//             console.log(this.answers);
//          } else if (type === 'string') {
//             console.log(`Poll resuslts are ${this.answers.join(', ')}`)
//          }
//     }
// }


// pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll))



// poll.displayResults.call({answers: [5,2,3]}, 'string')

// 
// End of coding challenge
// 
// 


// function expressions

// const runOnce = function() {

//     console.log('this will never run again')
// };


// runOnce();

// // IIFE : immediately invoked function expression.
// (function() {
//     console.log('this also will never run again')
// })();



// closures very important to learn

// const secureBooking = function(){
//     let passengerCount = 0;

//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`)
//     }
// }

// const booker = secureBooking();
// booker()
// booker()
// console.dir(booker)

// example 1
// let f;

// const g = function() {

//     const a = 23;

//     f= function(){
//         console.log(a*2);
//     }

// }


// const h = function() {
//     const b = 777;
//     f= function () {

        
//         console.log( b* 2)
//     };
    
// }


// g();
// f();
// // reassigning F function
// h();
// f();

// // example 2

// const boardPassengers = function(n,wait) {

//     // the closure has priority over the scope chain
//     const perGroup = n / 3;

//     setTimeout(function(){
// console.log(`We are now boarding all ${n} passengers`)
// console.log(`there are 3 groups each with ${perGroup} passengers`)

//     },wait * 1000)
//     console.log(`Will start boarding in ${wait} seconds`)
// }

// const perGroup = 500;

// boardPassengers(261, 15)


(function () {

    const header = document.querySelector('h1');
    header.style.color= 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color='blue'; 

    }
)
        

})();