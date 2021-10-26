'use strict';

const player0EL=document.querySelector('.player--0');
const player1EL=document.querySelector('.player--1');
const score1= document.querySelector('#score--0'); //selecting by id using quryselector
const score2=document.getElementById('score--1'); //selecting by id using elementid
const currentscore1= document.getElementById('current--0');
const currentscore2= document.getElementById('current--1');
const btnNew= document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const diceEl=document.querySelector(".dice");
let currentScore=0;


const switchPlayer= function(){
     document.getElementById(`current--${activePlayer}`).textContent=0;
        currentScore =0;
        activePlayer=activePlayer===0?1:0;
        player0EL.classList.toggle('player--active');
        player1EL.classList.toggle('player--active');
}

let scores,activePlayer,playing;
const init= function(){
playing = true;
scores=[0,0];
activePlayer=0;
score1.textContent=0;
score2.textContent=0;
diceEl.classList.add('hidden');

  
    currentscore1.textContent=0;
    currentscore2.textContent=0;
    //remove winer class
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    //switching active player player 1
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    

}
init();

//rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(playing){

    //generating random dice roll
    const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice);
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;
    //check for rolled
    if(dice !=1){
        currentScore += dice;
        //currentscore1.textContent=currentScore;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;

    }else{
        //switch to next player
        console.log("you hit one");
        switchPlayer();
       
    }
}
});

btnHold.addEventListener('click',function(){
     if(playing){
//add currentscore to active player score
    scores[activePlayer] +=currentScore;
    //scores[1]=scores[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    //declare winner
    if(scores[activePlayer]>=20){   
        playing=false;
         //query selector should have . always while slecting // getelementbyId not required
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
        switchPlayer(); 
    }
}   
    
})

btnNew.addEventListener('click',init);