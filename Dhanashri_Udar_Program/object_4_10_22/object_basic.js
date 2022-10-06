// object creation using literal syntax  let s = {};

// case 1]
let person ={}; //object liternal

person.firstName ="Dinesh";
person.lastName ="Kartik";

function fun (msg){
    console.log(msg);
}
person.message = fun;
console.log(person);

person.message("hahhahahah hahahah hahhahaha");

//case 2]

let person1 ={
    firstName :"Anupama",
    lastName :"Sharma",
    msg:function foo(msg){
        console.log(msg);
    }
}
person1.msg("good Morning");

//function

function message(msg){
    console.log(msg);
}

//call
message("nice.....");


//function expression

let foo = function print (msg){
    console.log(msg);
}
foo("Hello");


//function expression
//but here is function is anonymous function

let too = function(msg){
    console.log(msg);
}
too("Hi");
//----------------
function jk(){
    console.log("Hi.......");
}

let p = {} // this is way to create object using literal syntax
p.foo = jk;
let p1 ={
    too:jk
}
p1.too();
//
let obj = {
    fname : "Nayantara",
    info:function(){
        console.log("she is tamil actress");
    }
}

obj.info();
//ECMA
//ES 6>>2015

let obj1 ={
    fname:"Nayantara",
    info(){
        console.log("she is tamil actress");
    }
}
obj1.info();


