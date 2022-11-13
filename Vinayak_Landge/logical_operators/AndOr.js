
let a=10;
let b=20;

function a1(){

 console.log("this is function a1");

 return a==1;

}

function b2(){

    console.log("this is function b2");

    return b==30;
}

if(a1() && b2()){

    console.log("true");
}else{

    console.log("false");
}
console.log("------------------");

if(a1() || b2()){

    console.log("logical Or true");
}else{

    console.log("logical Or false");
}

console.log("___________");

let m=100,n=200;

let r=(m==100 && n==200)? "&& true":"&& false";

console.log(r);

let s=(m==100 || n==20)? "Or true":"Or false";

console.log(s);