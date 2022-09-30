//==============================
// in javascript variable are typeless, value have type , according to data/
// value assigned to variable we are going to decide data type of that variable

let x;
console.log(typeof x);
x = 23;
console.log(typeof x);
x ={};
console.log(typeof x);
x = [];
console.log(typeof x);
x = function(){}
console.log(typeof x);
x =true;
console.log(typeof x);
x = null;
console.log(typeof x);
x ="abc";
console.log(typeof x);
x ='lmn';
console.log(typeof x);

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function getData(){
   let f = function(){
     console.log("Hello");
   }
   return f;
}

let data = getData();
data(); 

