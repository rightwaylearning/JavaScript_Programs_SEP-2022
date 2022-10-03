console.log('== Pro-1 ==========================')
// Pro-1: Passing object to function

let StudentObj = {
    studName: "ajit",
    studRoll: 10,
    studAddress: "A/p Varvand, Tel Daund, Dist pune"
};                                         // Create a studentObj object   

function StudentFun(studData) {            // Create a studentFun function   
    console.log(studData.studName);       // print passing address of student  
    console.log(studData.studAddress);   // print passing address of student
}
StudentFun(StudentObj);                 // passing student object to function and call 

// Output:
// ajit
// A/p Varvand, Tel Daund, Dist pune
// ===============================================================================

// Pro:2  Passing object to function as a argument

function StudentInfo(studData) {            // Create a studentInfo function   
    console.log(studData.studName);       // print passing address of student  
    console.log(studData.studAddress);   // print passing address of student
}

StudentInfo({
    studName: "Rock",
    studRoll: 10,
    studAddress: "Manapa, pune 412215"
});                                         // Create a studentObj object   

// Output :
// Rock
// Manapa, pune 412215
// ===============================================================================


// Pro:3  Passing multiple object to function as a argument

function StudentDetails(studData) {            // Create a studentDetails function   
    console.log(studData.studName);       // print passing address of student  
    console.log(studData.studRoll);       // print passing address of student  
    console.log(studData.studAddress);   // print passing address of student
}

StudentDetails({
    studName: "Ram",
    studRoll: 11,
    studAddress: "Shivaji Nagar, pune 414432"
}, {
    studName: "Sham",
    studRoll: 11,
    studAddress: "Hadapsar, pune 432432"
});    



console.log('============================')