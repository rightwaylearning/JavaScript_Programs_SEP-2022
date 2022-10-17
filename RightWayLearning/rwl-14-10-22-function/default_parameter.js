
function foo(x = 100){
    console.log(x);
}

foo(10);  // 10

foo(); // undefined , 100


function sum(a =20,b=20){
    console.log(a+b);
}

sum();  // 40
sum(200,300); // 500


//----------------------------------------------

 function doOT(a,b){
    console.log(a,b);
   
 }

 doOT(10);  // 10 undefined
 doOT(10,20); // 10, 20
 doOT(10,20,30); // 10, 20

 //---------------------------------------------















