
let student = {
    marks : [80, 60, 70, 60, 90]
}

let sum = 0;

while(i=0 < student.marks.length){
    sum = sum + student.marks[i];
    i++;
};
student.Percentage = sum/student.marks.length;

console.log(sum);
console.log(student.Percentage);