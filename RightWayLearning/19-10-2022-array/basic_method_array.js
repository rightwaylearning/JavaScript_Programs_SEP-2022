let arr = [10,20,30];

// how to access
// 1] using inedx or using inedx as key
console.log(arr[0]);
console.log(arr['0']);
// 
console.log(arr.length);
//----------------------------
// 1] push()  >> at end postion it's puuting data
arr.push(100);
arr.push(200);
arr.push(300);
// 
console.log(arr.length);
console.log(arr);
// 2] unshift() at first postion always
arr.unshift(1);
console.log(arr);
arr.unshift(2);
console.log(arr);

// 3] pop  >> remove & return elemnet  at end place

let num = arr.pop();
console.log(arr);
console.log(num);

// 4] shift >> remove & return 1 st position element

let first = arr.shift();
console.log(first);
console.log(arr);
//  5] indexOf(); it will return index of elemnt

let i = arr.indexOf(100);
console.log(i);

arr.shift();

i = arr.indexOf(100);
console.log(i);

// if element is not present in array then indexOf() function return -1
let j = arr.indexOf(1000);
console.log(j);

// 6]  Array.isArray(data); it return boolean if arg is array else false
let isArray = Array.isArray([1,2,3]);
console.log(isArray);

let aa = [];
let foo= function foo(){}
console.log(typeof foo);


// pending items basic
// 1] Javascript runtime
// 2[error handling
// 3] data type (symbol, bigint)
// 4] JS operators & control flow

























