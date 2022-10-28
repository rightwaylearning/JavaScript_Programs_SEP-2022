function add(a,b){
    return a + b;
}
let sum;
console.log("operation is here");

try{
 sum = add1(10,20);
}catch(e){
    console.log(e.name);
    console.log(e.message);
}finally{
    console.log("I am finally block");
}
console.log("hello sum is done");
console.log("sum = " + sum);

console.log("do next operation");


/*

try{
-----
risly code
-----
}catch(e){
     // you can print error message here if u want
}finally{
    // close that file
}

*/






















