// -
// Role  1] only to do substraction

let a = 10;
let b = 20;
let sum = b - a;
console.log(sum);

let sum1 = 20-10;
console.log(sum1);

//-----------------------------------
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
let b1 = 1;
let sum2 = a1 - b1;   // = Number('10') - 1
                      // = 10 - 1
                      //  = 9 
console.log(sum2);

let sum3 = '10' - '4';
console.log(sum3); // 6

let sum4 = 'ten' - 5; //
console.log(sum4); //  NaN

let sum5 =  true + true + false - null;
console.log(sum5); // 2

let sum6 = true - undefined;
console.log(sum6); // NaN

let sum7 = -10 -23;
console.log(sum7);

let sum8 = true - true;
console.log(sum8); // 0

let sum9 = 'true' - 1;  //
console.log(sum9); //NaN

// ------------------------------------------------
//>> * , /

console.log(10/3); // 3.333333
console.log(10*3); // 30
console.log(10/'3'); // 3.333333
console.log('10'*3); // 30
console.log(10/true); // 10
console.log(10/0);  //  infinity
console.log(10/null) //= infinity
console.log(10/false) // = infinity


console.log(10*false);  //= 0
console.log(10*null) //=  0
console.log(10*true) // = 10

console.log(10*undefined); //  NaN

//------------------------------
// +, - ,*, /
// % >> reminder
console.log(10 % 3); // 1
console.log(9 % 3); // 0

console.log(-10 % 3); // -1
console.log(-10 % -3) // -1
console.log(10 % 3) // 1
console.log(10 % -3) // 1


// mod();
let s = mode(-10,3);
console.log(s)

//------------------------------------













