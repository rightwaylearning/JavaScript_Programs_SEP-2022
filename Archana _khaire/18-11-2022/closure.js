function outer(message){
    return function(name){
        return message + ' '+ name;
    }
}

let inner = outer("Good Night Sharayu..");

let output = inner("Aryan");
console.log(output); //  Good Night Sharayu Aryan                   

let o = inner("Ranjeet");
console.log(o); // Good Night Sharayu Ranjeet