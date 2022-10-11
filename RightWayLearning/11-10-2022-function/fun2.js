function sum(){
  //console.log(arguments); // arguments object
  let sum =0;
  for(let i =0; i<arguments.length ;i++){
    sum = sum + arguments[i];
  }
  console.log(sum);
}

sum(10);

sum(10,20,7,7,7,4,30);

sum(10,20,30,40,50);

//--------------------------------