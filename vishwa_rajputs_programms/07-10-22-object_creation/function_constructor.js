
// using this   

let student ={

    fname:"vishwa",
    lname:"Rajput",

}
function fullName(){

let fullName = this.fname + " " + this.lname;
return fullName;
}
student.name=fullName;
let n = student.name();

console.log(n);
 //second way to execute...
//student.name = function fullName(){

    //let fullName = this.fname + " " + this.lname;
    //return fullName;
   // }


// just for practice >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
  // let printName ={

    //fname:"vishwa",
    //lname:"Rajput",

//}

//console.log(printName.fname);
//console.log(printName.lname);
//let m = student.name();

//console.log(m);

// practice not litrl
let employee ={

    fname:"caroline",
    lname:"massy",

}
console.log(employee);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// constructor funcion
function createStudent(firstName,lastName){

 this.firstName=firstName;
 this.lastName=lastName;
  this.fullName=function(){

    return firstName + " " + this.lastName;
}
}

let obj = new createStudent("david","martin");
//let obj1 ={firstName:"martin",lastName:"luther"}

console.log(obj);
//console.log(obj.fullName());