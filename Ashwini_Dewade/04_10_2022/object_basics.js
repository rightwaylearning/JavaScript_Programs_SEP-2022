 
 //object creation using literal syntax
  
 //case 1
 let employee={};

 employee.fName="Ashwini";
 employee.lName="Dewade";
console.log(employee)

function fun(msg){
    console.log(msg);
}

employee.message=fun;

employee.message="This is Ash"

console.log(employee)

 //case 2
 let employee2={
    fName:"Mahesh",
    lName:"Dewade",
    msg:function fun(msg){
    console.log("Hello")
    }
 }
 employee2.fun('This is it')

 console.log(employee2)

 employee.age=23;
 employee1.age=26;
console.log(employee)
console.log(employee2)


