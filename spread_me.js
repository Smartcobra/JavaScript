const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


const arr=[7,8,9]

const badArray= [1,2,arr[0],arr[1],arr[2]];
console.log(badArray);

console.log("--------");
const newArr=[1,2,...arr]
console.log(newArr);

////copy array
const mainMenuCopy= [...restaurant.mainMenu]
console.log(mainMenuCopy);

//menu having both menu startmenu and main menu

const allMenu=[...restaurant.mainMenu ,...restaurant.starterMenu]
console.log(allMenu);

const myName= 'Jitu';
const letters=[...myName,' ']
console.log(letters);

//object 
const newRestaurant={foundIn:1998,...restaurant,founder:'jitu'};
console.log(newRestaurant);