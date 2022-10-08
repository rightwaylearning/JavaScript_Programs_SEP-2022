//case1
let person = {};
person.firstname = "Varsha";
person.lastname = "Tavhare";

function fun(msg){
    console.log(msg);
}
person.message = fun;

console.log(person);

person.message("hello... how are u?");

//case2
let person1 = {};
    firstname = "Neha";
    lastname = "Patil";
    msg:function foo(msg){
        console.log(msg);
    }


person1.msg("GOOD MORNING");
 
//call
message("nice....");

//function expression
let foo = function print(msg){
    console.log(msg);
}

foo("hello");
print("good moring");

//function expression
//bt here it is anonymous function
let too = function(msg){
    
    console.log(msg);
}

message("HELLO.......");


too("heyyy");

//=================================

let p = {} //create obj using litreals
p.foo = jk;
 let p1 = {
    too:jk
 }

 p1.too();