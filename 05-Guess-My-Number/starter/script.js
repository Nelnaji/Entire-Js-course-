'use strict';
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number';
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `Good job the Number was indeed ${secretNumber}`;
  } else if (guess > secretNumber && score > 1) {
    document.querySelector('.message').textContent = "you're too high";
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 1) {
    document.querySelector('.message').textContent = "you're too low";
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'you lost the game';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
