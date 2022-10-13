// function as expression here we are using....

let msg = function(){
    console.log("good morninng...");
}
msg();

//------------------------------------

function doSum(a,b){
    return function(){
        console.log(a+b);
    }
}
doSum(10000,20000)();

