
let m = 10;


// 1] data init
// 2] as function arg
// 3] return ftom function
// case 1] function as variable (data init)

function sum(a,b){
    let s = a+b;
    console.log(s);
}

let add = sum; // here sum look like normal variable

add(10,20);
sum(100,200);
//
