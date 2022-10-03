let obj = module.require("./cal.js");
// const {sum,sub,mul,div} = module.require("./cal.js");
// here no need to use obj

let s = obj.sum(10,20);
console.log(s);

let s1 = obj.sub(100,20);
console.log(s1);

let m = obj.mul(10,20);
console.log(m);

let d = obj.div(100,20);
console.log(d);
