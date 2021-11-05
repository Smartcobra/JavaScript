console.log(addDel(2,3)); //o/p-> 5 due to function hosting
console.log(addExp(2,3));  // error due to function hosting because assigning to const
console.log(addArrow(2,3)); // error due addArrow is undefined dueto hosting


function addDel(a,b){
    return a+b;
}

const addExp= function(a,b){ 
    return a+b;
}

var addArrow =(a,b)=>{a+b};