
let rollNumber = 23;
rollNumber = 24; // re assignment.

// 23 :- value/data/litral const value
// rollNumber :- it's variable name
//let :- language given keyword to deeclare data type

//1] first way to create object using literal const

let student ={
    name :"Satish",
    age:23,
    SchoolName:{
        name: "RKMM",
        rank:"3rd"
    },

    Address :"Ahmednager,Tarakpur stand 32453"
};

//operation(add operation)

student.std = "4th";

//update existing literal constant value

student.age = 26;

//delete property
delete student.Address;

//display view
console.log(student);
