
let person ={};
   person.firstName = "Sharayu";
   person.lastName = "Kalkhaire";
    
  function fun(msg) {
    console.log(msg);

  }
   person.message = fun;

   console. log(person);
   person.message("Hi Good Night");
      

   
   //case 2

   let person1 ={
    firstName:  "Ranjeet",
    lastName : "Kalkhaire",
    msg:function foo(msg){
        console.log(msg);
    }

   } 

   person1.msg("hi good morning....");
   //function...
    function message(msg){
        console.log(msg);
    }
    //call...
    message("nice....");

    let foo=function print(msg){
        console.log(msg);
    }
    foo("hello how are you...");

    let too=function(msg){
        console.log(msg);
    }

    too("hi..");

    function ar(){
        console.log("good day");
    }

    let p ={}
    p.foo = ar; 
    let p1 ={
    too :ar
    }

    p1.too();

    let obj = {
        fname:"Archana",
        info:function(){
          console.log("she is Business woman");  
        }
    }
    obj.info();
    
    
    let obj1 = {
        fname:"Nilam",
        info(){  // object method shorthand
          console.log("she is teacher");  
        }
    }
    
    obj1.info();
    
    
    
    
    
    
    
    
    
