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

