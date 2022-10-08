//construct function 

function createStudent (firstName,lastName){

    this.firstName=firstName;
    this.lastName=lastName;


    this.fulname=function(){
        return this( firstName+" "+lastName);
    }
}
   let obj1=new createStudent("omkar","shubham");
   console.log(obj1.fullName);

   let obj2=new createStudent("rashmi","pratima");
   console.log(obj2.fullName);
