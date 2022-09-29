
/// create one array of Employee object
// Employee object propetries 
/*
name:
salary:
age:

*/
// 40+ >> employee_cat : "S"  or "J"

let Employee = [
    {
        name:"Rohan",
        Salary:48000,
        age:24
    },
    {
        name:"Ramesh",
        Salary:37000,
        age:24
    },
    {
        name:"Ritesh",
        Salary:45000,
        age:24
    },
]

let index=0;

while(index < Employee.length){

    if(Employee[index].Salary >= 40000){
        Employee[index].employee_cat= "Senior";
    }else{
        Employee[index].employee_cat= "junior";
    }
    index=index+1;
}

console.log(Employee);


