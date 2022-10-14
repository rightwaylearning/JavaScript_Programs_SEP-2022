
let studentInfo = {
    studName: "Ajit",
    studRoll: "10",
    studAge : "30",
    studMarks: [50,60,70,80,90]
};

// console.log(studentInfo);
// Output:=>  { studName: 'Ajit', studRoll: '10', studMarks: [ 50, 60, 70, 80, 90 ] }

studentInfo.division = "A";    // add new property
// console.log(studentInfo);

studentInfo.studName = "Ajit Fargade";       // change name Ajit to Ajit Fargade 
console.log(studentInfo);
delete studentInfo.studAge;
console.log(studentInfo);

//==================
//  add percentage;
 //studentInfo.studMarks.length; // index  0 to len -1
 let sum = 0;
 let index = 0;

 while(index < studentInfo.studMarks.length){
    sum = sum + studentInfo.studMarks[index];
    index++;
}
// console.log(sum);


studentInfo.studPercentage = sum/studentInfo.studMarks.length;
console.log(studentInfo);







