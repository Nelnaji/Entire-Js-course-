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

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const player of game.scored) console.log(player);

// 2
let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
console.log(avg / Object.keys(game.odds).length);

// 3

const entries = Object.entries(game.odds);
console.log(entries);

for (const [key, value] of entries) {
  console.log(`Odd of ${key === 'x' ? 'draw' : 'victory'} `);
}
