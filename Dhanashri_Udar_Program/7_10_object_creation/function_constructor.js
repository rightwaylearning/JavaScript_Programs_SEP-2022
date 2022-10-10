// constructor function
function createStudent(firstName,lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){

        return this.firstName + " "+ this.lastName;
                                        //return this; // internal things
    }

}
    let obj1 = new createStudent("Saakshi"," Chand");
    console.log(obj1.fullName());

    let obj2 = new createStudent("Renuka"," Shinde");
    console.log(obj2.fullName());