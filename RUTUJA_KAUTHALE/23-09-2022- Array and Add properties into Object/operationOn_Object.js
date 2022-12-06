let Student={

    name:"rutuja",
    age:22,
    marks:[10,20,30,40]
}
console.log(Student);
Student.divison ="A";
let i=0;
let total=0;
while(i<Student.marks.length)
{
 total= total+Student.marks[i];
 i++;   
}
console.log(Student);
Student.total= total;

console.log(Student);

Student.age=18;
Student.Subject= "Maths";
console.log(Student);
delete Student.name;
console.log(Student);

delete Student.marks[3];
console.log(Student);