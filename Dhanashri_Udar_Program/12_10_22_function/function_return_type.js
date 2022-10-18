function test(){}

let s = test();
console.log(s);

//>>>>>>>>>>>>>>>>>>>>>
function sum(){
    for(let i = 1; i< arguments.length; i++){
        let sum = 0;
        sum = sum + arguments[i];
    }
    console.log(sum);
}
sum(23,76,89,45,90)