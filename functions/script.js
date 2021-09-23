 'use strict';
//use strict mode to capture the error. Some errors will not reflect if we use strictmode

// let hasDriversLiences=false;
// const pasTest=true;

// if(pasTest) hasDriversLiences=true;  // we missd s from the variable ,it is a bug if we not use strict mode we are not able to see any hint in the console.
// if(hasDriversLiences) console.log("I can drive");


// function fruitMixer(apple,orange){
//     console.log("In fruit mixer");
//     const juice=`juice of ${apple} apples and ${orange} oranges`;
//     return juice;

// }

// const juiceType=fruitMixer(3,0);
// console.log(juiceType);
// console.log("hi");

///////function declaration and function expression


///function in a declarative way
// function getAge(birthYear){
//   return 2037-birthYear;
// }

// const age1=getAge(1991);
// //function expression ---anonymous function

// const getAge2=function(birthYear){
//  return 2037-birthYear;
// }
// const age2= getAge2(1991);

// console.log(age1,age2);

// //Arrow function-

// const calAge3= birthYear=>2037-birthyear;
// console.log(calAge3(1991))


const yearUntilRetire= (birthYear,name)=>{
  const age4=2037-birthYear;
  const retire=65-age4;

  return `${name} has ${age4} to retire`;
}

console.log(yearUntilRetire(1991,"jitu"))