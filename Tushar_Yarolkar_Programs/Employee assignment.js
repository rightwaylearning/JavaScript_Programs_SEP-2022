
let Employee =[
    {
        name:"a",
        salary:8000,
        age:20 
    },
    {
        name:"b",
        salary:6000,
        age:38
    },
    {
        name:"c",
        salary:5000,
        age:50
    },
    {
        name:"d",
        salary:9000,
        age:48
    }
];

let index = 0;
while(index < Employee.length){

    if(Employee[index].age >= 40){
        Employee[index].category= "senior ";
    }else{
        Employee[index].category= "junior";
    }
    index = index + 1;
}

console.log(Employee);