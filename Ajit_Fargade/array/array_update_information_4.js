/* 1] primitive data type
        -> number,string,null,undefined,boolean
    2] reference type
        ->  object, array;
*/

// why array, why not primitive data type
// 1] using array we can store multiple value into single variable name

let studentName = ["Ram", "nam", "guru", "data"];
console.log(studentName);

// update nam to sham
studentName[1] = "Sham";
console.log(studentName);

// Output:=> [ 'Ram', 'Sham', 'guru', 'data' ]
//=======================================================


let num = [1,2,3,4,5]; //array of numbers
let name = ["A","B","C","D"]; // array of string
//===========================

let mix = ["A",23,true,null,undefined,{name:"abc",value:400},[1,2,3,4]];
console.log(mix);

/* Output:=>
  'A',
  23,
  true,
  null,
  undefined,
  { name: 'abc', value: 400 },   
  [ 1, 2, 3, 4 ]
*/
//===================================================================



