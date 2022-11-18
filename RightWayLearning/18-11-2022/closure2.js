
function outer(message){
    return function(name){
        return message + ' ' + name;
    }
}

let inner = outer("Good morning");

let output = inner("Rakesh");
console.log(output);  //  Good morning Rakesh

let output1 = inner("Sagar");
console.log(output1);  // Good morning Sagar

// A closure is combination of function & its ability to remember variable value of outer scope