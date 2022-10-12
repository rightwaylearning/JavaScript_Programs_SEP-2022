
let student = {
    firstName:"Abhi",
    lastName:"arora"
}

function fullName(){
    let fullName = this.firstName + " " + this.lastName;
    return fullName;
}

student.name = fullName;

//==========================
let student1 = {
    firstName:"rahul",
    lastName:"sharma"
}

student1.name = fullName;


console.log(student.name());

console.log(student1.name());