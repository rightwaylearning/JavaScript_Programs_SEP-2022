// what is this

let obj = {
    fname:"Madhuri",
    lname:"pawar",
    fullName:function(){
        let fname = "Vijay";
        let lname = "setupati";
       console.log(this.fname);
       console.log(this.lname);
       console.log(fname);
       console.log(lname);
    }
}

obj.fullName();

//=========================================================

function printFullName(){
    return this.fname + " "+ this.lname;
}

let obj1 ={
    fname:"sky",
    lname:"yadav"
}
obj1.foo = printFullName;
console.log(obj1.foo());

let obj2 ={
    fname:"abhi",
    lname:"sharma",
}
obj2.foo = printFullName;
console.log(obj2.foo());

let obj3 ={
    fname:"minal",
    lname:"kumari"
}
obj3.foo = printFullName;
console.log(obj3.foo());

// this is also one object, which is avialabel inside block, it may be function block
// that 'this' pointing to current object , who is going to cal that block












