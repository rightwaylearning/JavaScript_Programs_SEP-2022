function createStudent(firstName,lastName){
    
this.firstName = firstName;
this.lastName =  lastName;
this.fullName = function(){
return  this.firstName + " " + this.lastName;
}
}

let obj1 = new createStudent("Ansh","Rakul");
console.log(obj1.fullName());

let obj2 = new createStudent("Aniket","gawali");
console.log(obj2.fullName());