// short circuit &&, ||
//
let m = 10; let n = 20;

function exp1(){
    console.log("exp1() function body");
    return m == 11;
}

function exp2(){
    console.log("exp2() function body");
    return n == 20;
}

if(exp1() || exp2()){
  console.log("it's true part");
}else{
  console.log("It's false part");
}

let mm = 10; let nn  = 20;

let  result =  (mm == 10 && nn == 20) ?    true  :  "sorry";

console.log(result);

