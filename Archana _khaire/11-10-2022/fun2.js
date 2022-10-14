let msg = function(){
    console.log("Good Morning India.......");
}
msg();








function sum(a,b){
    return function(){
        console.log(a+b);
    }
}

sum(50,25)();