
function m(){
    return function(){
        console.log("Hello");
    };
}
let f = m();
f();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");


function test (a){
    console.log(a);

}
test(10);

function foo(a){
    return a;
}
let you = foo(function(){
    console.log("Good Morning");
});
you();

console.log("---------------------------");

function run(){
    return function(){
        console.log("test hello");
    };
}
run()();
(function mm(){
    console.log("Hello...........");
})();     //self exceution.......