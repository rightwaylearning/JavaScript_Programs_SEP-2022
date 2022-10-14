function sum(a,b){
    return a + b;
}

let s = sum(10,20);
console.log(s);
//===========================
function doSum(a,b,fn){
    return fn(a,b);
}

let final = doSum(100,200,sum);
console.log(final);

//=======================================