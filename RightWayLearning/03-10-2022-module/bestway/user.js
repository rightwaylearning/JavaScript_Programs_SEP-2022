let cal = module.require("./cal.js");
let app = module.require("./app.js");

let r1 = cal.sum(10,20);
let r2 = cal.sub(100,40);

let m =app.message;

console.log(r1);
console.log(r2);
console.log(m);