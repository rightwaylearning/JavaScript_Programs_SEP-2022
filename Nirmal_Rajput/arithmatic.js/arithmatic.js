let a = 20;
let b = 30;

let c = a - b;
console.log(c);

/* (+)
 number
 string
 boolean  , true  = 1 , false = 0
 null         null = 0
 undefined   >>> NaN
 bigint
 object 
  -------------
  symbol
*/


let a1 = '10';
let a3 = 20;

let a4 = a1 - a3;
console.log(a4);


let a5 = '10' + 15;
console.log(a5);


let a2 = '10';
let b1 = 1;
let sum2 = b1 - a2;   // = Number('10') - 1
                      // = 10 - 1
                      //  = 9 
console.log(sum2);


let c1 = true + true +false;
console.log(c1);

let c2 = true + true + false + null;
console.log(c2);

let c3 = true + true + false + null+ undefined;
console.log(c3);


//------------------------------
// +, - ,*, /
// % >> reminder

console.log(10%2);
console.log(10%3);

console.log(10/3); // 3.333333
console.log(10*3); // 30
console.log(10/'3'); // 3.333333
console.log('10'*3); // 30
console.log(10/true); // 10
console.log(10/0);  //  infinity
console.log(10/null) //= infinity
console.log(10/false) // = infinity


