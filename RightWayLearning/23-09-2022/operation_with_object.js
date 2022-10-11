// student object creation
let student = {
    name:"Ranjit",
    age:23,
    marks:[42,56,39,57,66,56]
};
console.log(student);

// add these 2 propetries into array >> division , percentage;
student.division = "A"; // add new property
console.log(student);
student.name = "Ranjit Patil"; // update
console.log(student);
delete student.age; // delete age property
console.log(student);

//  add percentage;
 //student.marks.length; // index  0 to len -1
 let sum = 0;
 let index = 0;

 while(index < student.marks.length){
    sum = sum + student.marks[index];
    index++;
 }

 student.percenatge = sum/student.marks.length;

 console.log(student);




