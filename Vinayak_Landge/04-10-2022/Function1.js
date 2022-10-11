let person = {}; // object lilteral

person.firstName = "Dinesh";
person.lastName ="kartik";

function fun(msg){
    console.log(msg);
 }
person.message = fun;

console.log(person);


person.message("hahahh hahah hahaha");

