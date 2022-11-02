// pass by value
function any( x){

    x = x+10;        // i can take same ref like y or x both are diffrnt here x is in block scope ...here in this case pass value not refernce
  console.log(x);
}
let y = 10;
any(y);
console.log(y);

//.........practice...............
function test(a){
a = a + 30;
console.log(a);


}
let b = 20;
test(b);
console.log(b)


//here the examole of call by reference .....

function updateObject(obj){

obj.key=200;
console.log(obj);

}
let obj1 = {

  key:20,
}
updateObject(obj1);
console.log(obj1);