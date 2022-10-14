
function test(){}

let s = test();
console.log(s);

//-------------------------

function sum(){
    let sum =0;
  for(let i =0 ;i < arguments.length; i++){
          sum = sum + arguments[i];
  }
  console.log(sum);
}

sum(10,2,4,6,7,8,9,34)
