
//let s = module.require("./maths.js");

//let v = s.add(10,20);
//let w = s.min(20,30);
//let z = s.mu(30,40);
//let q = s.di(40,50);

//console.log(v);
//console.log(w);
//console.log(z);
//console.log(q);



//or we can do like that

const {add,mi,mu,di} = module.require("./maths.js");

let v =(1,2);
let w =(3,4);
let z =(5,6);
let q =(7,8);

console.log(v);
console.log(w);
console.log(z);
console.log(q);
