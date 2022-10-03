function getData()
{
    return function()
        {
            console.log("hello my name is rutu");
        }
    return f; 
}
let d=getData()
d();

console.log("------------------");


function test(a)
{
    console.log(a);
}
test(10);
console.log("------------------");



function foo(a){
   return a;
}

let you=foo(function(){
    console.log("hello");
});
you();

console.log("------------------");

// SELF EXECUTION FUNCTION


(function mm(){console.log("good morning")})();

console.log("------------------");

function run(){
    return function() {
        console.log("hello-------");
    }
}
run()(); 

console.log("------------------");

function f(){

    return function(){
        console.log(10);
    };
}
f()(); 



