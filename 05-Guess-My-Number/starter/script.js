'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Not a number';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `You win !!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when wrong guess
  } else if (guess !== secretNumber && score > 1) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? "you're too high" : "you're too low";
    score--;
    document.querySelector('.score').textContent = score;
  } //when no score left
  else {
    document.querySelector('.message').textContent = 'you lost the game';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

// reseting the game

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
