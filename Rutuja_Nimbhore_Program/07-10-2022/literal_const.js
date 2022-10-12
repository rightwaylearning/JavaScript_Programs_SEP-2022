
//object creation using literal const
let student={
    name:"rahul",
    age:23,
    schoolName:{
        name:"mkg",
        rank:"3rd",
    },
    address:"cn-34/56, b-24,mumbai",

};

//add operation
student.std="4th";
console.log(student);

//updating existing literal const value
student .age=10;
console.log(student);

//delete property
delete student.address;

//display
console.log(student);