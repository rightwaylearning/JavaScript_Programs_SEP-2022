
 let a = function(){
    console.log("this is me");
 }
 a();

 function dosum(a,b){
    return function(){
        console.log(a + b);
    }
 }
 dosum(12,34)();