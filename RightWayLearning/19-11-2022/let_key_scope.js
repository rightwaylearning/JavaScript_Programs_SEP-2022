// case 1  with var keyword we can declare same variable 2 time, but using let only onces other wise it will give error
var cc = 10;
var cc =100;

//let b = 20;
//let b = 78;

//---------------------------------------------



// case 2 in case 2 : let & var both have function block scope
let a = 10;

function show(){
    let b = 100;
}
show();
//console.log(a);
//console.log(b);

// case 3

//var m = 100;
let  m =1;
{
   // var mm = 200;
   let mm = 2;
}

console.log(m);
console.log(mm)

// var keyword have only function scope, but not  block scope
// let have both function scope & block scope

