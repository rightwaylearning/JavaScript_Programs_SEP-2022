console.log("$$$ logicalNegation(not) Operator");
console.log("Logical operation(not) on number and bigint data type");
let n1 = 23345443n;
console.log(!n1);//false
let num1 = 1234;
console.log(!!num1);//true
num1 = 0;
console.log(!!num1);//false
console.log("Logical operation(not) on null and undefined and data type also on Nan");

let bol = !null;
console.log(!null);//true
console.log(bol);//true
 let num2=undefined;
 console.log(!undefined)//true
 console.log(!NaN);//true

 console.log("Logical operation on Object  data type");

let obj = {
    valueof: function () {
        return 0;
    }
}
console.log(!!obj);// true
let obj1={
}
console.log(!obj1);// false
console.log("Logical Operation(not) on String data type");

let n2 = "";
console.log(!!n2);//false

n2 = "sarthak"; let n3 = " ";//void space
console.log(!2);//false
console.log(!!n3);//true