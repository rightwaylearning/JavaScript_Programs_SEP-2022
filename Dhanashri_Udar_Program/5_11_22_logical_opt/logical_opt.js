// ! >> always generate result in boolean

let status = true;

if(!status){
  console.log("I am true part");
}else{
  console.log("I am false part");
}


//---------------------------------------
// in case of boolean , true become false & false become true
let s1 = true;
let s2 = !s1;
console.log(s2);

//--------------------------------------
// number , actually in JS 0 is false & any non-zero number is true
let n = 100;
//console.log(!n); // false
//console.log(!!n); // true
n = !!n;
console.log(n);// true

let  p = 0;
console.log(!p); //  true;
console.log(!!p);// falsse

let d = NaN;   // NaN  >> false
console.log(!d); //true
//----------------------------------------------------------
// string     "" >>> false , non empty "abc" >> true;

let str = "hi";
console.log(!str); // false
console.log(!!str); // true

let str1 = "";
console.log(!str1); // true
//========================================================
// undefined >> false, null >> false

let k = undefined;

console.log(!k); // true
console.log(!null); // true
//========================================================

let obj = {};
console.log(!obj); // false
console.log(!!obj); // true

//======================================

let j = 12;
j = true;
j = {};
j = "";
j = null;
j =undefined;
j =[];

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















































