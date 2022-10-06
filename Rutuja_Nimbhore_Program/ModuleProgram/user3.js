let cal=module.require("./cal2.js");
let app=module.require("./app.js");

let r1=cal.add(10,20);
let r2=cal.sub(10,20);
let r3=app.msg;

console.log(r1);
console.log(r2);
console.log(r3);
