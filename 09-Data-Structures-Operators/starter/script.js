'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const d = new Date();
// let time = d.getMinutes();

// const order = (mealName, orderTime = `${time}`) => {
//   return `you've ordered ${mealName} at ${time}`;
// };

// console.log(order('pizza'));

// const arr = [7, 8, 9];

// const newArr = [1, 2, 3, ...arr];

// console.log(newArr);

//                     //
// coding challenge #1 //
//                     //

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// 1

// my solution

// const players1 = game.players[0];
// const players2 = game.players[1];

// teach solution

// const [players1, players2] = game.players;

// // 2

// const [gk, ...fieldPlayers] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// // 3
// const allPlayers = [...players1, ...players2];
// // 4
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);

// // 5
// // my solution

// // const { team1, x: draw, team2 } = game.odds;

// // teach solution

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// // 6

// const printGoals = (...players) => {
//   let goals = players.length;
//   console.log(...players, goals);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'fifteen');

// printGoals(...game.scored);

// // 7
// team1 > team2
//   ? console.log('team1 will most likely win')
//   : console.log('team2 will most likely win');

// // another good solution
// console.log(`${team1 < team2 ? 'team1' : 'team2'} is likely to win`);

// // if team1>team2 true then console.log
// team2 > team1 && console.log('team2 will most likely win');

// console.log(` ${2 + 1 === 4 ? 'yes' : 'no'}`);

// coding challenge #2 //

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',

//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// for (const player of game.scored) console.log(player);

// // 2
// let avg = 0;
// for (const odd of Object.values(game.odds)) avg += odd;

// //   /= signifie egale divisé par
// avg /= Object.keys(game.odds).length;

// console.log(avg);

// // 3

// const entries = Object.entries(game.odds);

// for (const [key, value] of entries) {
//   console.log(
//     `Odd of ${key === 'x' ? 'draw:' : 'victory'} ${
//       key !== 'x' ? game[key] : ''
//     } ${value}`
//   );
// }

// // 4 bonus
// // code found on the internet

// const scorersObj = {};

// for (const playerName of game.scored) {
//   scorersObj[playerName] = (scorersObj[playerName] || 0) + 1;
// }

// console.log(scorersObj);

// coding challenge #3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1
// const eventsArr = [];

// for (const [minute, event] of gameEvents) {
//   eventsArr.push(event);
// }

// const events = new Set(eventsArr);

// console.log(events);

// teacher solution

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2

// gameEvents.delete(64);
// console.log(gameEvents);

// // 3

// // const [...minutesArr] = gameEvents;
// // console.log(
// //   `an event happened, on average every ${
// //     minutesArr[9][0] / gameEvents.size
// //   } minutes`
// // );

// // teacher solution
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `an event happened, on average every ${time / gameEvents.size} minutes`
// );

// // 4

// for (const [minute, event] of gameEvents) {
//   console.log(
//     minute < 45
//       ? `[first half] ${minute}: ${event}`
//       : `[second half] ${minute}: ${event}`
//   );
// }

// working with strings

// what is indexOf and lastIndexOf
// can you determine the length of a string ? how ?

// can you search by index a string ?
// can you indexOf words and letters ?
// What is slice ?
// does slice accept negative values ?

// const airline = 'ryanair airline brussels';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(airline.slice(0, airline.lastIndexOf(' ')));

// console.log(airline.slice(2));

// // basically js transform the string into an object

// console.log(new String('nawfal'));
// // nawfal is an object

// // what is .toLowerCase()
// // what is .toUpperCase()
// // what is .trim() is there a way to trim the start and the end ? does it only trim white spaces ?
// // what is .replace() and .replaceAll()

// const text = "J'ai mangé une pomme rouge, sur la route du chaperon rouge";

// console.log(text.replace(/rouge/g, 'jaune'));

// // what is .includes()
// // what is .startsWith();
// // what is .endsWith()

// // what is split() what does it return ?
// console.log('elkhaznagi Nawfal'.split(' '));

// const [nom, prenom] = 'elkhaznagi Nawfal'.split(' ');

// // what is join()

// const newName = ['M.', nom.toUpperCase(), prenom].join(' ');
// console.log(newName);

// coding challenge #4

const body = document.body;
const textarea = document.createElement('textarea');
const btn = document.createElement('button');
btn.innerText = 'submit';
body.append(textarea);

body.append(btn);

btn.addEventListener('click', () => {
  const text = textarea.value;

  const splitText = text.toLowerCase().split('\n');
  let greenStar = 0;
  for (const underscore of splitText) {
    greenStar += 1;
    let newText = underscore.trim().split('_');
    let bTextBody = newText[1].slice(1);
    let bTextLetter = newText[1].slice(0, 1).toUpperCase();
    let aText = newText[0];
    const camelCase = `${aText}${bTextLetter}${bTextBody} `;

    console.log(` ${camelCase.padEnd(20, ' ')} ${'✅'.repeat(greenStar)}`);
  }
});
