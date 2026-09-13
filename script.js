'use strict';

//selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');


let scores,currentScore,activePlayer,playing;

const init = function () {
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  
  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};


init();

const playerChange = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // const generatedDice = diceRoll();
    // const diceImages = ['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png','dice-6.png',]

    // console.log( diceEL.src = diceImages[dice]);

    //or
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playerChange();

      // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // console.log(Number(document.getElementById(`score--${activePlayer}`).textContent));
    if (scores[activePlayer] >= 20) {
      playing = false;
      // console.log(`player - ${activePlayer} wins!!!`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
    } else {
      playerChange();
    }
  }
});

btnNew.addEventListener('click', init);
