let student ={
    fName:"mahesh",
    lName:"kalkarni"
}
function fullName(){
    let fullName=this.fName+" "+this.lName;
    return fullName;
}
student.name=fullName;

let student1 ={
    fName:"Ashwini",
    lName:"D"
}

student1.name=fullName;
console.log(student1.name());

console.log(student.name());