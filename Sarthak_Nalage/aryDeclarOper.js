console.log("Decalring Arrays in js and performing operations");
console.log("Methods for declaring Array");

let arry1=[1,2,['s','a'],{name:"sarthak",roll:48}]; //array literals
//creating object
let arry2 =new Array();
console.log(arry2.length);
arry2[0]="sarthak";
console.log(arry2[0]);
//creating object and defining its size so it remains reserved
let arry3=new Array(5);
console.log(arry3.length);
console.log("performing Operations of Array");
//push-> appending 
arry3.push(10);
console.log(arry3);
// pop -> removing at the end and returing that remove element 
let rtrn=arry3.pop();
console.log(arry3);
//unshift -> inserting at the 0th indexing
arry3.unshift(1);
console.log(arry3.length);
console.log(arry3);
arry3[1]=2;
console.log(arry3);

//shift -> removing the element at first locations(0th index) and returning it 
let fst_rt=arry3.shift();
console.log(fst_rt);
console.log(arry3);
let secong_rt=arry3.shift();
console.log(secong_rt);
console.log(arry3);
let third_rt=arry3.shift();
console.log(third_rt);
console.log(arry3);

//indexOf ->returing index of passed element if not found resturn -1
let ary=[1,2,3,4];
console.log(ary.indexOf(2));
// isArray is static method to confirming it is array or not returing the result in boolean formate
console.log(Array.isArray(ary));






