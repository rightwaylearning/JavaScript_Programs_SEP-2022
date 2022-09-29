let student=[
    {
        name:"A",
        age:49
    },
    {  
        name:"B",
        age:27
    },
    {
        name:"c",
        age:99
    },
    {
        name:"D",
        age:55
    }
]
let index=0;

while(index < student.length){

    if(student[index].age >= 40){
        student[index].group = "Senior Group";
    }else{
        student[index].group ="Junior Group";
    }
    index=index+1;
}

console.log(student);