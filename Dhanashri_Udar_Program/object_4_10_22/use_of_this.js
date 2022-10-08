// what is this

let obj ={
    fname : "Madhuri",
    lname :"Pawar",
    FullName: function(){
        let fname = "Vijay"
        let lname ="Setupati";

        console.log(this.fname);
        console.log(this.lname);
        console.log(fname);
        console.log(lname);
    }

}
obj.FullName();

//------------------------------------

function printFullName(){
    return this.fname + " "+this .lname;
}
let obj1 = {
    fname :"Sky",
    lname:"Yadav",
}
obj1.foo= printFullName;
console.log(obj1.foo());

let obj2={
    fname :"Abhi",
    lname:"Sharma",
}
obj2.foo= printFullName;
console.log(obj2.foo());

// this is also one object, which is avialabel inside block, it may be function block
// that 'this' pointing to current object , who is going to cal that block

