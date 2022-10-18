function test(x){

    x = x + 10;

    console.log(x);
}

let y = 20;
test(y);
console.log(y);

console.log("----------");



function foo(obj){

obj.key=200;

console.log(obj);

}

let myObj={

    key:20
}
 
foo(myObj);
console.log(myObj);
