console.log("Closure=> function have ability to return with it's own scope along with it's lexical scope(parent attribute)");
function test(){
    let m="Sarthak";
    console.log("closure concept is done");
    return function(a){
        console.log(a+m);
    };
    

}
//function call
let fun=test(); //here function is return with  function(a){ console.log(a+m)} and m="sarthak"(lexical scope)
fun("hello ");