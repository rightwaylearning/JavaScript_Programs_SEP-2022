let employeeList = [
    {
        name:"ab",
        age:34,
        salary:56000
    },
    {
        name:"KL",
        age:54,
        salary:156000
    },
    {
        name:"HK",
        age:44,
        salary:156000
    },
    {
        name:"kk",
        age:31,
        salary:16000
    }
];

let i = 0;
while(i < employeeList.length){
    if(employeeList[i].age > 40){
        employeeList[i].bonus = 10000;
    }
    i = i +1;
}
console.log(employeeList);
