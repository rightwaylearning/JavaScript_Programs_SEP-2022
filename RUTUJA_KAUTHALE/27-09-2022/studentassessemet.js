

let schoolInfoDetails={
    schoolname:"VDI ",
    schooladdress:{
        line_1:"Shirur",
        line_2:"Pune",
        pincode:413702
    },
    schoolrank:3,
    schoolheadmaster:"Mr. Kauthale"
}


let Student=[{
    name:"rutuja",
    roll_no:10,
    address:{
        line_1:"at post deodaithan",
        line_2:"kukadi colony",
        line_3:"shrigonda Ahmednagar",
        pincode:413702
    },
    marks:[10,20,30,40,50],
    schoolDetails:schoolInfoDetails,
},{
    name:"Athrav",
    roll_no:2,
    address:{
        line_1:"at post deodaithan",
        line_2:"kukadi colony",
        line_3:"shrigonda Ahmednagar",
        pincode:413702
    },
    marks:[10,50,5,40,50],
    schoolDetails:schoolInfoDetails,
}];

let index=0;
while(index<Student.length)
{
   console.log(index+1 +" Student Info");
   console.log(" ");
    console.log("Student Name : "+Student[index].name);
    console.log("Student Rollno :  "+Student[index].roll_no);
    console.log("Student adress : "+Student[index].address.line_1+" "+Student[index].address.line_2+" "+Student[index].address.line_3+" "+Student[index].address.pincode);
    
      let i=0;
    console.log("Student Marks ");
    while(i<Student[index].marks.length){
        console.log(Student[index].marks[i]);
        i++;
    }
    console.log("Student School Details");
    console.log("School name : " +schoolInfoDetails.schoolname);
    console.log("School adress : " +schoolInfoDetails.schooladdress.line_1+" "+schoolInfoDetails.schooladdress.line_2+" "+schoolInfoDetails.schooladdress.pincode);
    console.log("School rank : " +schoolInfoDetails.schoolrank);
    console.log("School headmaster : " +schoolInfoDetails.schoolheadmaster);
    console.log(" ");
    index++;
}