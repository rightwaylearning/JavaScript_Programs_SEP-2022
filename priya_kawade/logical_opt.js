let priya = true;

if(!priya){
  console.log("I am true part");
}else{
  console.log("I am false part");
}


n = !!n;
console.log(n);

let  p = 0;
console.log(!p); 
console.log(!!p);

let d = NaN;   

let str = "hi";
console.log(!str); 
console.log(!!str); 

let str1 = "";
console.log(!str1);


let k = undefined;

console.log(!k); 
console.log(!null);


let obj = {};
console.log(!obj); 
console.log(!!obj); 





function exp1(){
 console.log("Hi I am exp1");
 return false;
}

function exp2(){
   console.log("Hi I am exp2");
   return true;
}

if(exp1() && exp2()){
    console.log("i am true part");
}else{
    console.log("I am false part");
}



