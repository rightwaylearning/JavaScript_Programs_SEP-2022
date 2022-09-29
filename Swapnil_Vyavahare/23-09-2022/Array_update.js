/*
 1] primitive data type
 number,string,null,undefined,boolean
 2] reference type
   object, array;
*/

let student = {
    name:"swapnil",
    age:23
}

console.log(student.name);
console.log(student.age);

// why array, why not primitive data type
// 1] using array we can store multiple value into single variable name

let n1 = 10;
let n2 = 20;
let n3 = 30;

let n =[10,20,30];
console.log(n[0]);
console.log(n[1]);
console.log(n[2]);

console.log(n);

let m =100;
console.log(m);
m=110;
console.log(m);



let k = ['swapnil', "Rohan", 'sushant']
console.log(k[0]);
k[0]='ganesh';
k[1]='pandu';
k[2]='kishor';
console.log(k[0])
console.log(k);


let num = [1,2,3,4,5,6,7,8,9];
let name = ['a','b','c','d']

let mix = ["A",23,true,null,undefined,{name:"abc",value:400},[1,2,3,4]];
console.log(mix);
