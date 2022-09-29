let student = {
    Name:'rohan',
    age: 19,
    mark:[50,55,84,69,46,77]
};

console.log(student);
student.division='d';
console.log(student);
student.Name = "rohan vyavahare";
console.log(student);
delete student.age;
console.log(student);

//  add percentage;
 //student.marks.length; // index  0 to len -1

 let sum = 0;
 let index = 0;

 while(index < student.mark.length){
     sum = sum + student.mark[index];
     index++;
 }

 student.percentage = sum/student.mark.length;
 console.log(student);