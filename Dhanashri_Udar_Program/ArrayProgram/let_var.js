var m = 10;
let k = 200;

function f(){
    var n = 20;  // h have function block scope
    let l = 400; // l have also function block scope
    console.log(m);
    console.log(n);
    console.log(k);
    console.log(l);
}
// you can declare  vraiable with var or let both have function block scope, outside u cant access

    console.log(m);
    //console.log(n); 
    console.log(k);
   // console.log(l);
    f();