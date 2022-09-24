let Student=
{
     name:"ranjit",
     age:23,
     marks:[42,56,39,53,66,56]
};
console.log(Student);
// add these 2 propertiess into aray >> division , percentage

Student.devision="A";      //add new property
console.log(Student);
Student.name="Ranjit Patil";  //update values
console.log(Student);
delete Student.age;     ///delete age property
console.log(Student);
console.log("============================");

//add percentage
//Student.marks.length; // index 0 to length -1

let sum=0;
let index=0;
while(index<Student.marks.length)
{
    sum=sum+Student.marks[index];
    index++;
}
Student.percentage=sum/Student.marks.length;
console.log(Student);