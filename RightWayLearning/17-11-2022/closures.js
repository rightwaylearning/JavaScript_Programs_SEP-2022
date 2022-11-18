function foo(){
   var b = 10;
   return function fun(){
     console.log(b)
   }
   
}

let f = foo();
f();