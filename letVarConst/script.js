/*
let is muttable, we can reassign the value. const is immutable.

*/

let age = 30;
age = 31;
///const
/*
if reassign the value of constatnt the below error will come
Uncaught TypeError: Assignment to constant variable.
at script.js:7
*/

const birthYear=2010;
birthYear=2011;

//var
var job='programmer';
job ='teacher';