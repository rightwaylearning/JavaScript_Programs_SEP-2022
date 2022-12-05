
test();
console.log(m);

var m = 10;
function test(){
    console.log('Hello , I am test function.');
}

// steps of excustion context
// step 1 :- allocate memory with default value for variable & function
// default value of variable is undefined & function default value is body;
// in step's memory allocation
// ---   m : undefined
// ----- test:{......}
//--------------------------------
// step 2, code excution
// -------test(); calll it >>> o/p  Hello, I am test function;
//--------console.log(m): m value is undefibed 
//-------- m =10

// ----------------------------------------
// closures

function outer(){
    let message = "hello, Good  morning";

    function  inner(){
        console.log(message);
    }

    return inner;
}


let value = outer();
value();