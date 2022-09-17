function student(subject){
 
    console.log("Subject Name:"+subject.subjectName);
    console.log("Subject Code:"+subject.subjectCode);
    console.log("Subject Marks:"+subject.subjectmarks);
   }
   
   let subjectDetails={
   
        subjectName : "English",
        subjectCode : 1212325,
        subjectmarks : 85
   }
   
   student(subjectDetails);
   