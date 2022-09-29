// array >>>

let n = 10;  // number
let h = "abc"; // string
let j = null; // null
let k = undefined;// undefined
let y = true;// boolean

// object
let obj = {
    firstName:"swapnil",
    lastName:"vyavahare",
    age:22
    
}

console.log(obj);


// how to check data type varible

console.log(typeof obj); // object

//====================================
// here If I want to store multiple values then notmal existing data type not working efficiently

let p = 10;
let l =78;
let g = 30;

let obj1 = {
  p:1,
  j:2,
  o:9
}
// array

let rollNumbers = [10,20,30,40,50,60,70,10,90,100];
             // length of rollNumbers array is 10
             // so range of index is 0 - 9

console.log(rollNumbers[9]);

let names = ["A","B","C","D","L","KK","MM"];
    // length  of names array is  = 5
    // so range of index = (0-4)

let index = 0;
while(index < names.length){
    console.log(names[index]);
    index = index + 1;
}

let i = 0;
while(i<rollNumbers.length){
    console.log(rollNumbers[i])
    i++;
}