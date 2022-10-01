
// We can add 

let studentInfo = {
    studName: "Ajit Fargade",
    studRoll: 11, 
    studAge: "30",

    studentAddress:{
        line:"post varvand, tel Daund",
        landMark:"Nitin Kirana store",
        pin:412215
    }
};

console.log(studentInfo.studName);                  // objectName.key(studName) => Ajit Fargade                 
console.log(studentInfo.studAge);                   // objectName.key(studAge)  =>30
console.log(studentInfo.studentAddress.landMark);   // objectName.innerObjectName.key(landMark) =>Nitin Kirana store            
console.log(studentInfo.studentAddress.pin);        // objectName.innerObjectName.key(pin) =>412215       

// OutPut: ===
//Ajit Fargade
//30
//Nitin Kirana store
//412215
//============================================================