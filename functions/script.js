 'use strict';
//use strict mode to capture the error. Some errors will not reflect if we use strictmode

// let hasDriversLiences=false;
// const pasTest=true;

// if(pasTest) hasDriversLiences=true;  // we missd s from the variable ,it is a bug if we not use strict mode we are not able to see any hint in the console.
// if(hasDriversLiences) console.log("I can drive");


function fruitMixer(apple,orange){
    console.log("In fruit mixer");
    const juice=`juice of ${apple} apples and ${orange} oranges`;
    return juice;

}

const juiceType=fruitMixer(3,0);
console.log(juiceType);