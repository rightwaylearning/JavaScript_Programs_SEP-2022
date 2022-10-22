
// how to print> undefined 

function test(){


}
let s = test();
 console.log(s) 
 
// how to print msg

function test(){
console.log("hello")
}
test();

// how to  print undefined and msg also

function test(){
    console.log("hello")
    }
   
    console.log(test());

// by using variable captured return from test then ans will print msg which we given.

function test(){


    console.log("hello");

}
let v = test();

// here test is return function then fuction stored in r and then function rename as r and we called to r.
//

function test(){
    let f= function(){                   //function(){                 // we can directly return a function 
        console.log("hello")             //return console.log("hello")    // let f will leave 
    }                                   //
    return f;                           //  retun f will leave and see ans will be the same   
    }
   let r = test();
    r(); // an will be hello