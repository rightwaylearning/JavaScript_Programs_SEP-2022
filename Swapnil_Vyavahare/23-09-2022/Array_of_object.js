let student =[
    {
        name:"swapnil",
        age:24
    },

    {
        name:"Rohan",
        age:19
    },

    {
        name:"sushant",
        age:24
    }

];

let index=0;
while(index<student.length){
    console.log(student[index].name)
    console.log(student[index].age)

    if(student.age>20){
        console.log(student[index].name +  " " + "is consider in big age group")
    }else{
        console.log(student[index].name + " " + " is consider in small age group")
    }
    
    index++;
}
    

