function test(){}

let s = test();
console.log(s);

//>>>>>>>>>>>>>>>>>>>>>
function sum(){
    let sum = 0;
    for(let i = 1; i< arguments.length; i++){
        
        sum = sum + arguments[i];
    }
    console.log(sum);
}
sum(23,76,89,45,90)