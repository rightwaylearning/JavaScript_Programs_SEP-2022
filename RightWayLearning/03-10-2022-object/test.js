const { sum } = require("../03-10-2022-module/bestway/cal");

let cal = {
    num1:1,
    num2:2,
    num3:3,
    num4:4,
    add:function(a,b){
     return a + b;
    }
}

// user

let r = cal.add(cal.num1, cal.num2);
console.log(r);



let print = {

     show:function(any){
         console.log(any);
     }
}


print.show("Good morning india.");

// console is oject & log is function inside that
console.log("Good morning india.");

console.log(typeof console);
console.log(typeof console.log);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");
console.log(typeof print);
console.log(typeof print.show);




// a,b parameters
function  sum(a,b){
   console.log(a+b);
}

// 10,20 arguments
sum(10,29);




























