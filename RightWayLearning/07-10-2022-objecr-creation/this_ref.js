// what is this; 
// this is object


let student = {
    firstName:"mahesh",
    lastName:"kulkarni"
}

function fullName(){
    let fullName = this.firstName + " " + this.lastName;
    return fullName;
}

student.name = fullName;

//==========================
let student1 = {
    firstName:"Ashwini",
    lastName:"D"
}

student1.name = fullName;


console.log(student.name());

console.log(student1.name());
