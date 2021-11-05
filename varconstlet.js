console.log(me);  //undefined due to hosting.
console.log(job);  //error due to TDZ.
console.log(year); // we will get the same error as let


var me='jonas';
let job='teacher';
const year=1991;

/*
undefined
d:\JavaScript\varconstlet.js:2
console.log(job);
            ^

ReferenceError: Cannot access 'job' before initialization
*/