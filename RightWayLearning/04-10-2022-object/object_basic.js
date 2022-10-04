// object creation using literal syntax  let s = {};

// case 1]
let person = {}; // object lilteral

person.firstName = "Dinesh";
person.lastName ="kartik";

function fun(msg){
    console.log(msg);
 }
person.message = fun;

console.log(person);


person.message("hahahh hahah hahaha");

// case 2]
let person1 = {
firstName:"Anupama",
lastName:"Parmeshwaram",
msg:function foo(msg){
   console.log(msg);
}
}

person1.msg("good morning");


// function
function message(msg){
   console.log(msg);
}

// call
message("nice...");

// function expression
let foo = function print(msg){
    console.log(msg);
}
foo("hello");

//  function expression 
// but here function is anonymous function
let too = function(msg){
    console.log(msg);
}

too("Hi");
//=============================================
function jk(){
    console.log("hi...");
}

let  p ={} // this is way to craete object using literal syntax

p.foo = jk;

let  p1 = {
    too:jk
}

p1.too();

//
let obj = {
    fname:"Nayantara",
    info:function(){
      console.log("she is tamil actress");  
    }
}
obj.info();
// ECMA
// ES 6 >> 2015

let obj1 = {
    fname:"Nayantara",
    info(){  // object method shorthand
      console.log("she is tamil actress");  
    }
}

obj1.info();








