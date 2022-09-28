
let Student = {
    Name : "Parag",
    Age:15,
    Marks:[56,67,78,88,71]
};
console.log(Student);
Student.Roll= 13;
//console.log(t.Age);
Student.Name="Parag Pradhan";
console.log(Student);
delete Student.Age;

let sum=0;
let index=0;

while(index<Student.Marks.length){
    sum =sum+ Student.Marks[index];
    index++;
}
Student.percentage= sum/Student.Marks.length;
console.log(Student);