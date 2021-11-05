// we will use a function which will delete the shopin cart


//////////////// DO NOT USE VAR /////////////////////////////

console.log(numProducts);
if(!numProducts) deleteShopingCart();

var numProducts=10;
function deleteShopingCart(){
    console.log("All products deleted");
}

//----------------------------------------------------
   /*
    if you see here numproducts is 10 still deleteShopingCart() ran. 
    becuase at line no-4  numProducts varaible called and that time the value is undefined as hosting
     which is not equal to 10.
   */
/*////////////-----o/p
[Running] node "d:\JavaScript\var_Willkillyou.js"

All products deleted

[Done] exited with code=0 in 0.17 seconds

*/

///// var will create window properties
// window is a object in the browser

var x=1;
let y=2;
const z=3;

console.log(x===window.x);
console.log(y===window.y);
console.log(z===window.z);