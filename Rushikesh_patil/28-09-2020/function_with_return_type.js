//==============================
// in javascript variable are typeless, value have type , according to data/
// value assigned to variable we are going to decide data type of that variable

let x;
console.log(typeof x);//undefined
x = 23;
console.log(typeof x);//number
x ={};
console.log(typeof x);//object
x = [];
console.log(typeof x);//object
x = function(){}
console.log(typeof x);//function
x =true;
console.log(typeof x);//boolean
x = null;
console.log(typeof x);//object
x ="abc";
console.log(typeof x);//string
x ='lmn';
console.log(typeof x);//string

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function getData(){
   let f = function(){
     console.log("Hello");
   }
   return f;
}

let data = getData();
data(); 

/*
function address(){
    return function(){
        console.log("Hello Good morning bro..........");
    }
}

 let r=address();
 r();


 (function(){
        console.log("Good night bro..............")
    }
 )();
 */

 function address(){
    return function name(){
        console.log("Rushikesh");
    }
 }

 let adr=address();
 adr();

 let bollywood=actor(
    function (){
        console.log("Hritik Roshan");
    }
 );
 

 bollywood();


 function student(){
    return function std_name(){
        console.log("vaibhav");
    }
 }

 student()();

 (function teacher(){
    console.log("mukesh");
 })();






