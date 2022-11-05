function sub(a,b){
    return a-b;
}
 
let sum;
console.log("Operation is here....");
try{
    sum = sub1(52,20);
}catch(e){
    console.log(e.name);
    console.log(e.message);
} finally{
    console.log("I am finally block......");
}

console.log("Hello sum is done....");
console.log("sum="+sum);
console.log("Do next Operation..........");