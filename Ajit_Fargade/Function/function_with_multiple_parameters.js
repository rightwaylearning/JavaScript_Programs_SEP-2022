// Function with Parameters

function studentMarks(sub1, sub2){         // sub1 and sub2 is a parameters of function studentMarks
    console.log(sub1);                     // print sub1 value   
    console.log(sub2);                     // print sub2 value
}
studentMarks(60,70);                       // this is studentMarks function call here we are passing 2 arguments 

// OutPut: >>>>>
// 60
// 70
// ==================================================================================

function totalMarks(sub1, sub2){         // sub1 and sub2 is a parameters of function totalMarks 
    let result = sub1 + sub2;            // addition of sub1 and sub2 
    console.log(result);                 // print the value of result 
}

totalMarks(60,70);                       // this is totalMarks function call here we are passing 2 arguments 
totalMarks(80,70);                       // this is totalMarks function call here we are passing 2 arguments 
totalMarks(60,60);                       // this is totalMarks function call here we are passing 2 arguments 

// OutPut: >>>>>
// 130
// 150
// 120
// ==================================================================================

