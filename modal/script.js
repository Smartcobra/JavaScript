'use strict';

const modal= document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const showModal=document.querySelectorAll('.show-modal');

for( let i=0;i<showModal.length;i++){
 showModal[i].addEventListener('click',function(){
     console.log('button clicked');
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
 })
}

