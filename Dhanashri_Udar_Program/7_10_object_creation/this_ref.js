// what is this; 
// this is object


let student ={
    firstName : "Shital",
    lastName : "Jadhav"

}

function fullName (){
    let fullName = this.firstName + " "+ this.lastName;
    return fullName;
}
student.name = fullName;
//>>>.>>>>>>>>>>>

let student1 ={
    firstName:"rutuja",
    lastName:"nimbhore"
}

student1.name = fullName;

console.log(student.name());

console.log(student1.name());