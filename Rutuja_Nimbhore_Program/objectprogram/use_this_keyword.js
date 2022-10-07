let obj={
    fName:"nayantara",
    lName:"pawar",
    fullName:function(){
        let fName="vijay";
        let lName ="satpute";
        console.log(this.fName);
        console.log(this.lName);
        console.log("-----------");
        console.log(fName);
        console.log(lName);
        

    }
}
obj.fullName();

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

function printFullName(){
    return this.fname+" "+this.lname;
}
let obj1={
   fname:"sky",
   lname:"yadav"
}
obj1.foo=printFullName;
console.log(obj1.foo());

let obj2={
    fname:"abhi",
    lname:"pawar"
 }
 obj2.foo=printFullName;
 console.log(obj2.foo());

 let obj3={
    fname:"dhanu",
    lname:"udar"
 }
 obj3.foo=printFullName;
 console.log(obj3.foo());








