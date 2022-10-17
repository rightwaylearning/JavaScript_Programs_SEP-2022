let students =[
    { name:"A",
    age:12
},
{
name:"B",
age:15
},
{
    name:"c",
    age:8
    },
    {
        name:"d",
        age:19
        },
];

let index=0;
while(index<students.length){
    if(students[index].age>=10){
        students[index].group="Big group";
    }
else
{
    students[index].group="Small group"
}
index=index+1;

}
console.log(students)