'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const roll  = document.querySelector('.btn--roll');
const hold= document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores,currentScore,activePlayer,playing;

const init = function(){
scores= [0,0];
 currentScore = 0;
 activePlayer =0;
 playing = true;

score0El.textContent =0;
score1El.textContent =0;
currentScore0.textContent=0
currentScore1.textContent=0

diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
};
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent =0;
    currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
}
roll.addEventListener('click',function(){
    if(playing){
const dice = Math.trunc(Math.random()*6)+1;
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png`;
if(dice !== 1){
currentScore += dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;

}else{

    //switching the user
   switchPlayer();
}}
});


hold.addEventListener('click',function(){
    if(playing){
        //add score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
     //win
if(scores[activePlayer] >= 100){
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('active');
}else{
   switchPlayer(); 
}

    }

});

//reset the game
newGame.addEventListener('click', 
init
);
