let person = {}; // object lilteral

person.firstName = "Dinesh";
person.lastName ="kartik";

function fun(msg){
    console.log(msg);
 }

 person.message = fun;
console.log(person);
console.log(typeof person.message);


person.message("hahahh hahah hahaha");

console.log("----------------------------------------------");

let person1={
     firstName:"Anupama",
     lastName:"parmeshwarm",
     msg:function foo(msg){
        console.log(msg);
     }
}
person1.msg("good morning");
console.log("----------------------------------------------");


//function
function message(msg){
    console.log("hello how are you");
}
message();

console.log("----------------------------------------------");

//function expression
let foo=function print(msg){
    console.log(msg);

}
foo("hello");
console.log("----------------------------------------------");
//function expression
//but here function is anonymous function

let too=function(msg)
{
    console.log(msg);
}
too("hi");

console.log("----------------------------------------------");
 
function jk(){
    console.log("hello.....");
}

let p={} //this is way to create object using literal syntax
p.foo=jk;
p.foo();


console.log("----------------------------------------------");

let p1={
    too:jk
}
p1.too();

console.log("----------------------------------------------");

let obj={
    fName:"nayantara",
    info:function(){
        console.log("she is tamil actress");
    }
}
console.log("----------------------------------------------");
obj.info();

let obj1={
    fName:"nayantara",
    info(){
        console.log("she is tamil actress");
    }
}

obj1.info();









