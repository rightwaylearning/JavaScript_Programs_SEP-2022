// ****************************8
// function
function sayHi(){
    console.log("Hi.. Good morning..");
 }
 // 1] function keyword
 // 2] function name
 // 3] ()
 // 4] {} function body/ function block
 
 // how to call /invoke
 sayHi();
 //********************************** *
 // Parameter Vs arguments
 //1] while declaring function inside round barcaket we are keeping parameters
 function hi(a,b){
 
 }
 
 // here a, & b are parameters
 hi(10,20);
 // here while calling function we are passing some data like 10, 20 that is nothing but arguments
 //****************************************** */
 // what is arguments is object(array)
 function doSum(){
   let sum = 0;
     for( let i = 0; i < arguments.length;i++){
          sum = sum + arguments[i];
    }    
 }
 
 doSum(10,20);
 doSum(10,20,30,40,40)
 //==========================
 
 // return keyword;
 
 function doSomething(){
   console.log("HI!! hello");
 }
 
 let r = doSomething();
 console.log(r); // undefined
 
 function sayGood(){}
 console.log(saygood()); // undefined
 
 //====================================
 // javascript function is first class citizens
 
 // key feactures of normal variables
 // let s = 10;
 // 1] we can assign any value to that s variable
 // 2] u can pass s to function as arg
 // 3] u can return that s from any function
 // we can do with functon above 3 things that why function is first class citizens
 
 // case 1]
 let s = function say(){
 
 }
 //===================
 function main(){}
 
 let start = main;
 main();
 start();
 //=========================================
 // case 2]
 function mi(){
     console.log("Hi from myself.....");
 }
 
 function sayHi(fn){
     fn();
 }
 
 sayHi(mi);
 // case 3]
 function doSum(){
   let fn = function add(a,b){
     return a + b;
   }
    return fn;
 }
 
 let result = doSum();
 
 let finalAns = result(10,20);
 console.log(finalAns);
 
 // function hoisting; (adv script);
 
 mm();
 function mm(){
     console.log("say Hi");
 }
 // javascript convert above script into below formatt
 function mm(){
     console.log("say Hi");
 }
 mm();
 // ===================================
 let fn = function(){
 
 }
 // anonymous function (no name that function)
 // instance use
 
 function doOperation(fn){
    fn();
 }
 doOperation(function(){
     console.log("say Hi....");
 })
 
 //====================
 // selft invoke function
 (function vivo(){
 
 })();
 
 function oppo(){
     return function(){
         console.log("i am brother of vivo");
     }
 }
 
 let fn1 =oppo() ;
 fn1();
 // alternate option
 
 oppo()();
 