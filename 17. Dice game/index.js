import Dice from './Dice.js';

const dice1 = new Dice(document.querySelector('.img1'));
const dice2 = new Dice(document.querySelector('.img2'));

function updateWinner() {
  const $h1 = document.querySelector('h1');

  if (dice1.getValue() > dice2.getValue()) {
    $h1.innerText = '🚩 Player 1 wins';
  } else if (dice1.getValue() < dice2.getValue()) {
    $h1.innerText = 'Player 2 wins 🚩';
  } else {
    $h1.innerText = "It's a draw! 🏳️"
  }
}

updateWinner()
