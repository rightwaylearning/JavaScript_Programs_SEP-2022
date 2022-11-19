var aa = 200;
var bb = 300;

let a1 = 100;
let a2 = 400;

console.log(aa);//200
console.log(bb);//300


console.log(a1);//100
console.log(a2);//400


//case 2 in case 2  let and var  both have function  block scope 

let a = 10;
function show(){
    let b = 20;
}
show();
//console.log(a);
//console.log(b);

let m = 50;
{
    let mm = 60;
} 

console.log(m);
console.log(mm);
