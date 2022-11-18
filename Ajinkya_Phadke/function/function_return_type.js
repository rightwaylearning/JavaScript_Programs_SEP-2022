function test(){}

let x = test();
console.log(x);

//-------------------------

function sum(){
    let sum =0;
  for(let i =0 ;i < arguments.length; i++){
          sum = sum + arguments[i];
  }
  console.log(sum);
}

sum(100,20,40,60,70,80,90,340)