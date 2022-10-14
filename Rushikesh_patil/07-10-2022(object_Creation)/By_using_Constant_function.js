
function Student(firstName,lastName){

    this.firstName=firstName;
    this.lastName=lastName;
    this.fullName=function(){

        return firstName + " " + lastName;

    }

}

let obj1=new Student("Rushikesh","Patil");

console.log(obj1.fullName());
