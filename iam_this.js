/*
 this:   a special variable that is created for every
 execution context.

 Takes the value of the owner function in which `this` key waord is used.
 -------------uses------------
 Method : if we use a this keyword inside a function , this keyword will point to the object that calling the method.
 simple function call: undefined ( strict mode)
 arrow function :   dont have its own `this`, if the  `this` used inside a arrow function then it is ponting to the sorrounded funtion;
 Event listner : point to the DOM element that the handler attached to;
 
*/  