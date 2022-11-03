let s =120.00;
let t = 20.25;
 
console.log(s); // 120.00
console.log(t); // 20.25

//NaN
 let s1 = "Good Morning"/2; // Not a Number
 console.log(s1);

 // string

 let a = "Hi";
 let b = "Hello";
 let c = "Good Night";
 let s2 = "Hi How are 'you'";
 console.log(c);
 console.log(s2);

 //------------------
 // java script value is immutable

 let b1 = "JavaScript";
 console.log(b1); // JavaScript
 b1[0] = 'j';
 console.log(b1);

 let str = " Hello";
 str = str + " Good Day ";
 console.log(str);
 //---------------------

// bollean data type

let str1 = true;
let str2 = false;

let str3 = Boolean("Hi..");
console.log(str3);

 str4 = Boolean(" ");
console.log(str4);

// number to boolean

let bb = Boolean(0);//false
console.log(bb);
let nn = Boolean(-50); //true
console.log(nn);

// null & undefined to boolean 

let mn =  Boolean(null);
console.log(mn);
mn = Boolean(undefined);
console.log(mn);

// object into boolean

let t1 ={};
console.log(Boolean(t1));
t1 = null;
console.log(Boolean(t1));

let f = 1234566987712n;
console.log(f);
