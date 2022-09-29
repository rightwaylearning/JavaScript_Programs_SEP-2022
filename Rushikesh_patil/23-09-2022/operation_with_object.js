let student ={
    name:"Rushikesh",
    age:15,
    caste:"OBC",
}

console.log(student);

student.division = "A";
console.log(student);
student.name ="Rushikesh Mahesh Patil";
console.log(student);
delete student.division;
console.log(student);
student.marks=[65,89,76,55,39,80];
console.log(student);


let sum=0;
let index=0;

while(index < student.marks.length){
    sum = sum + student.marks[index];
    index=index+1
}

student.percentage= sum/student.marks.length;

console.log(student);



