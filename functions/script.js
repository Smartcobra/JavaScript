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


//////////////////function in a declarative way
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

////Arrow functions//////////////////
///////////Arrow functions with no param
 const getAge3=birthYear=>2037-birthYear;
 const age3=getAge3(1991);

 console.log("age->"+age3)

 /////////with  multiple lines
//  const getRetirment=birthYear=>{
//      const age=2037-birthYear;
//      const ritirmentageleft=65-age;
//      return ritirmentageleft;
//  }
//  const ageLeft=getRetirment(1991)
// console.log("ageLeft->"+ageLeft);

//////with multiple param

const getRetirment2=(birthYear,name)=>{
    const age=2037-birthYear;
    const ritirmentageleft=65-age;
    return `${name} has ${ritirmentageleft} years to retire`;

}

const retire=getRetirment2(1991,"john")
console.log(retire);