let students = [
    {
        name:"A",
        age: 12
    },
    {
        name:"B",
        age: 5
    },
    {
        name:"C",
        age: 11
    },
    {
        name:"D",
        age: 9
    }
];
let index = 0;
while(index < students.length){
    if(students[index].age >= 10){
        students[index].group = "Small group";
    }
    else{
        students[index].group = "Big group";
    }
    index = index + 1;
}
console.log(students);
