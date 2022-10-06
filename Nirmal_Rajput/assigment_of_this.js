let Student = {
    fname:"nirmal",
    lname:"rajput",

    Fullname:function(){

             let obj = "vishva";
             let obj1 = "rajput";

                   console.log(this.fname);
                   console.log(this.lname);
                   console.log(obj);
                   console.log(obj1);

          }

}
Student.Fullname();


