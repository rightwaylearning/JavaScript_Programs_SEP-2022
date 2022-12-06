
 function a(){

}
console.log(typeof a);  //function


console.log(a.length);  //0
console.log(a.prototype);  //{}


function B(a,b){

}
console.log(typeof B);//function


console.log(B.length);  //2   parameter pass 
console.log(B.prototype);


//let mm=new Object();
B.call();
console.log(B.call());


function sum(){
let name="rutuja";
let sirname ="nudnawd";
}
let s=sum();
console.log(name);