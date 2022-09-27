//student object creation
let student ={
    name: "Dhanshri",
    age: 23,
    marks :[67,78,87,79,84]

};
console.log(student);
// add these 2 propetries into array >> division , percentage;
student.division ="A";
console.log(student);
student.name = "Dhanashri Udar";
console.log(student);

delete student.age;
console.log(student);

//add percentage
//student.marks.length; //index 0 to length 1

let sum = 0;
let index =0;

while(index < student.marks.length){
    sum = sum + student.marks[index];
    index++;

}
student.percentage = sum / student.marks.length;
console.log(student);
