
function m(){
    return function(){
        console.log("hello");
    };
}

let f = m();
f();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>");

function test(a){
 console.log(a);
}
test(10);
console.log(">>>>>>>>>>>>>>>>>>>>>>>>");

function foo(a){
   return a;
}

let you = foo(
    function(){
       console.log("Good");
    }
);

you();

console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
// self excutable function
(function mm(){
    console.log("Hello.............");
})();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>");

function run(){
    return function(){
        console.log("test hello");
    };
}
run()();

















