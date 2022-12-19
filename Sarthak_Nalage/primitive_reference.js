console.log("Code about Primitive(Stack) and reference(Heap) Examples");
console.log("Primitive data type gets Memory on stack");
let m=10;
let n=m;
/*  there is copy paste techniques in js 
*/
console.log(n);
m=11;
console.log(n);
console.log("Reference  data type gets Memory on Heap");
//refrencing same address location all reference data types which is referencing to that one
let obj1={name:"sarthak",age:"20"};
let obj2=obj1;
console.log("Priniting object 2");
console.log(obj2);
obj1.name="SARTHAK";
console.log("Priniting object 2");
console.log(obj2);



