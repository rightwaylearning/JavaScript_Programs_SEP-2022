let employeeList=[
    {
        name:"ab",
        age:34,
        salary:56000
    },
    {
        name:"rg",
        age:45,
        salary:45000,
    },
    {
        name:"gt",
        age:"54",
        salary:30000
    }
];

let i=0;
while(i<employeeList.length){
    if(employeeList[i].age>40){
        employeeList[i].bonus=10000;
    }
    i++;
}
console.log(employeeList);