// constructor function
function createStudent(firstName,lastName){
                                 // this = {}; // interanl things
    this.firstName = firstName;
    this.lastName =  lastName;
    this.fullName = function(){
        return  this.firstName + " " + this.lastName;
    }
                                 // return this; // intenal things
}

let obj1 = new createStudent("AB","LM");
console.log(obj1.fullName());

let obj2 = new createStudent("saket","sharma");
console.log(obj2.fullName());