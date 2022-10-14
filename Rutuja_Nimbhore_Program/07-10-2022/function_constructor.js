function createStudent(firstName,lastName)
{
   
    this.firstName=firstName;
    this.lastName=lastName;

    this.fullName=function(){
        return this.firstName+" "+this.lastName;
     }

}
 //return this;//internal things
 let obj1=new createStudent("AB","lM");
 
 console.log(obj1.fullName());
