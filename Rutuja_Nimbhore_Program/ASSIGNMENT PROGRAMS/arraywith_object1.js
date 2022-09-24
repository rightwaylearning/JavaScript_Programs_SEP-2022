// create one array of Employee object
// Employee object propetries 
/*
name:
salary:
age:

*/
// 40+ >> employee_cat : "S"  or "J"


let Employee=    // create one array of Employee object
[ 
 {
    name:"Dhanu",
    salary:40000,
    age:23
 },
 {
    name:"Rutu",
    salary:50000,
    age:23
 },
 {
    name:"Chetan",
    salary:20000,
    age:23
 },
 {
    name:"bhalchandra",
    salary:40000,
    age:25
 },                       // Employee object propetries 
]
console.log(Employee);  
console.log("=============================================");  


//Employee.Category is senior or junior   >>>>>> index 0 to Employeee.length
index=0;
while(index<Employee.length)
{
    if(Employee[index].salary>=40000)
    {
        Employee[index].Category="Senior";
    }
    else
    {
        Employee[index].Category="Junior";
    }
    index=index+1;
}
console.log(Employee);

