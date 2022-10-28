
let a = 120.00; //  120

let b = 10.89;

console.log(a); // 120.00
console.log(b); // 10.89

// in java script if u want to strore full number , it required less memory 
// e.g 
//let a = 120.78;  here required more memory
//& let a = 120.00; // less memory bz .00 will ignore

//NaN
let a1 = "HI hello"/2; // Not a number // NaN
console.log(a1);

//=========================================
// string

let str = 'a';
let str1 = "abc";
let k  = "hello how are 'you'";
console.log(k);

//-------------------------------------
// java script string data value is immutable

let b1 = "javaScript";
 console.log(b1);
 b1[0] = 'J';
 console.log(b1);

let str2 = "Hi";
str2 = str2 + "hello";
console.log(str2);

//================================================
// boolean data type

let bb = true;
let cc = false;

// Boolean();
//
// string to boolean
let ss = Boolean("Hi");
console.log(ss);
ss = Boolean("");
console.log(ss);   

// number to boolean

let nn = Boolean(0) ;// false
console.log(nn);
nn= Boolean(-20);// non zero // true
console.log(nn);
// null & undefined to boolean;

let mmm = Boolean(null);
console.log(mmm);
mmm = Boolean(undefined);
console.log(mmm);

// object into boolean

let kk = {};
console.log(Boolean(kk));
kk = null;
console.log(Boolean(kk));

// if you want to store number // 64 bit  >> 53 bit

let bbb = 32756735638747345689374n;
console.log(bbb);
































