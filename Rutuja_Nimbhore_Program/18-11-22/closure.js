function outer(message){
    return function(name){
        return message+' '+name;
    }
}
let inner=outer("good morning");

let output=inner("rakesh");
console.log(output);

let output1=inner("sagar");
console.log(output1);