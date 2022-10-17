var m = 10;
let k = 200;

function f() {
    var n = 20;  // n have function block scope
    let l = 400; // l have also function block scope
    console.log("Value of M: " + m);
    console.log(n);
    console.log("Value of K: " + k);
    console.log(l);
    console.log("============");
}
f();

// you can declare  vraiable with var or let both have function block scope, outside u cant access
console.log(m);
//console.log(n);     // n has block scop
console.log(k);
// console.log(l);    // l has block scop