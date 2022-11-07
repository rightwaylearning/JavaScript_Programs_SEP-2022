//logical operator  (!- negation,  &&- and,  ||- or)
// ! negation or not 
// boolean 

console.log("Boolean");
let a= true;
console.log(!a);//false
console.log(!!a)// true

//number -- non zero number are treate as true and zero is false.

console.log(" Number");
let b=100;
console.log(!b);  //false
console.log(!!b); //true
console.log(!10); //false
console.log(!-30); //false
console.log(!0); // true
console.log(!!0);// false

console.log(" string");


//String   nonEmplty string treated as a true and empty string as a false.
let str=" ";
console.log(!str); //false
console.log(!!str); //true

let str1="rutuja";
console.log(!str1);// false
console.log(!!str1); //true

str2="";
console.log(!!str2); //false
console.log(!str2); //true

console.log(!"kshfefkd"); //false
console.log(!!"hi"); //true

console.log(!!'hi this is rightway learning.'); // true

//undefined    undefined==false


console.log(" Undefined"); 
console.log(!!undefined);//false
console.log(!undefined); //true

let u=undefined;
console.log(!!u); //false
console.log(!u); //true


console.log("Null");
//NULL  null==false

console.log(!null); //true

console.log(!!null); //false
a=null;
console.log(!a); //true
console.log(!!a); //false

//object  empty value also have some value hence empty object is true.


console.log("Object");
let obj= {}

console.log(!!obj); //true
console.log(!obj); //false

let obj1={
    function(){

    },
    name:"rutuja"

}
console.log(!obj1); //false
console.log(!!obj1);//true




















let m=10;
 let n=20;

 