
function run(){
    return function(){
        console.log("hello");
    }
}
let n1=run();
n1();
console.log("=========================================");


function getdata(){
    console.log("Hello world");
    return;
}

// let data = getdata();          
// console.log(data);             

// Output: Hello world
//          undefined

console.log("=========================================");


function getdata1(){
   
    let f1 = function(){
        console.log("Hello");
      }
      return f1;
}

let data1 = getdata1();   
console.log(data1);  

// Output: [Function: f]
// =====================================================

