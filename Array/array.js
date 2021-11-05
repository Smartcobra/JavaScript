const friends=['ram','hari','syam'];
console.log(friends);
////array destructring
const [x,y,z]= friends;
console.log(x,y,z);
/////////////////

console.log(friends[0]);

const firstName='Ram';
const ramDetails= new Array(firstName,'Nayak',1991,'teacher',friends);
console.log(ramDetails);

///////////////////////////////////////////////
console.log("/////////////////////////");
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]

}
};

const[first,second]=restaurant.categories;
console.log(first,second);

//if we want to italian , Vegeterian
const[main,,secondary]=restaurant.categories;
console.log(main,secondary);

///retruns 2 value from array
const[starter,mainCourse]=restaurant.order(2,0);
console.log(starter,mainCourse);

const nested=[2,4,[5,6]];
//const[i, ,j]=nested;
const[i, ,[j,k]]=nested;
console.log(i,j,k);

/////default value
////const[p,q,r]=[8,9]
//console.log(p,q,r); //8 9 undefined for we have 2 element and calling for 3 element
const[p=1,q=1,r=1]=[8,9]
console.log(p,q,r)