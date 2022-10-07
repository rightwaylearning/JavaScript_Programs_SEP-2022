function m(){
    return function(){
        console.log("hello");
    };
}

let f = m();
f();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");

function test(a){
    console.log(a);
}
test(10);
console.log(">>>>>>>>>>>");

    let yoo = foo(
        function(){
        console.log("good");

    }
    );
you();
 
console.log(">>>>>>>>>");

//self executable function
(function nm(){
    console.log("hello..........");
    
})();
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");


function run(){
    return function(){
        console.log("text hello");

    };
    
}
run()();

  