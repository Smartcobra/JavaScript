'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent= '👏 Correct Number ';
// console.log(document.querySelector('.guess').value);
// document.querySelector('.number').textContent=14;
// document.querySelector('.score').textContent=10;

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let higScore=0;

const displayMessage= function(message){
document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',
function(){
    const guess=Number(document.querySelector('.guess').value);
  console.log(guess);
    if(!guess){
        document.querySelector('.message').textContent= '❌ :: No Number ';
        //when palyer wins
    }else if(guess===secretNumber){
        // document.querySelector('.message').textContent= '👏 Correct Number ';
        displayMessage('👏 Correct Number ');
         document.querySelector('.number').textContent=secretNumber;
         document.querySelector('body').style.backgroundColor= '#60b347';
         document.querySelector('.number').style.width='30rem';

         if(score>higScore){
           higScore=score;
           document.querySelector('.highscore').textContent=higScore;
         }
    }else if(guess!==secretNumber){
         if(score > 1){
           document.querySelector('.message').textContent=
           guess>secretNumber ? '😇  Large number' :'😫  Small number'
            score--;
            document.querySelector('.score').textContent= score;
      }else{
        //document.querySelector('.message').textContent= '🤯 You lost the game';
        displayMessage('🤯 You lost the game');
         document.querySelector('body').style.backgroundColor= '#FF0000';
        document.querySelector('.score').textContent=0;
      }
    }
    // else if(guess > secretNumber){
    //   if(score > 0){
    //       document.querySelector('.message').textContent= '😇  Large number';
    //      score--;
    //      document.querySelector('.score').textContent= score;
    //   }else{
    //     document.querySelector('.message').textContent= '🤯 You lost the game';
    //   }
        
    // }else if (guess < secretNumber){
    //   if(score > 0){
    //           document.querySelector('.message').textContent= '😫  Small number';
    //          score--;
    //           document.querySelector('.score').textContent= score;
    //   }else{
    //     document.querySelector('.message').textContent= '🤯 You lost the game';
    //   }
            
    // }
    
})


document.querySelector('.again').addEventListener('click', function(){
score=20;
secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent= 'Start guessing...';
document.querySelector('.number').textContent='?';
document.querySelector('.score').textContent= score;
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor= '#222';
document.querySelector('.number').style.width='15rem';
})