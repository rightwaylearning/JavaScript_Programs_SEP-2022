let f = module.require("./first.js");

console.log(f.msg);


let s=f.add(20,10);
console.log(s);

let m=f.mul(20,10);
console.log(m);

let su=f.min(20,10);
console.log(su);

let d=f.div(20,10);
console.log(d);
