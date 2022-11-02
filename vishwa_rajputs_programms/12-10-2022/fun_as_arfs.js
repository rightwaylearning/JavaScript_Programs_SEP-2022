

function sum(a,b){

    //let m = a+b;
    //return m;
    return a+b;
}
let m = sum(10,20);
console.log(m);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< practice >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\\

//function doSum(a,b){
//let s= a+b;
//console.log(s);

//}
//doSum(20,30);

//____________________________whether its wrng or right_____________________the way i can do by adding multpl operators.............

function doSum(a,b,fn){
     //fn(a,b);
     //return a+b;
    //return fn(a,b);
    //return a-b;
    //return a/b;
    return a*b;
    
    }
    //doSum(20,30,sum);
    let result = doSum(30,20,sum);
    console.log(result);
    