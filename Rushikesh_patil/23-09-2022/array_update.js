/*
 1] primitive data type
 number,string,null,undefined,boolean
 2] reference type
   object, array;
*/

let student = {
    name:"cherry",
    age:23
}

console.log(student.name);
console.log(student.age);
//--------------------------------------------------------------
// why array, why not primitive data type
// 1] using array we can store multiple value into single variable name

let n1 = 10;
let n2 = 20;
let n3 = 30;

let n = [10,20,30];
// length or size  >> 3 ,   inedx limit  0-2 (0,1,2)
console.log(n[0]);
console.log(n[1]);
console.log(n[2]);
console.log("===================================================");

console.log(n);
console.log(n.length); // length = 3 , means valid index is from 0 to 2
console.log("===================================================");
// re-init
let m = 100;
console.log(m);
m = 500; // here m is updated
console.log(m);
console.log("===================================================");
let k = ["Sanket","abhi","nilesh"]; // 3 variable k[0],k[1],k[2];
console.log(k);
k[1] = "abhijit";
console.log(k);
//========================================================================
let num = [1,2,3,4,5]; //array of numbers
let name = ["A","B","C","D"]; // array of string

let mix = ["A",23,true,null,undefined,{name:"abc",value:400},[1,2,3,4]];
console.log(mix);
//===================================================================

