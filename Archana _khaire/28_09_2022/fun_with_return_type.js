let s ;
console.log(typeof s);

s = {};
console.log(typeof s);

s = [];
console.log(typeof s);

s = 10;
console.log(typeof s);

s =null;
console.log(typeof s);

s =function (){};
console.log(typeof s);

s = true;
console.log(typeof s);

s ="archana";
console.log(typeof s);

console.log("<<<<<<<<<<<<<<");

function getData(){
    let f = function(){
        console.log("hello good morning");
    }
    return f;
}
 
let data =getData();
data();
