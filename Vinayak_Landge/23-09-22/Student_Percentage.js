
let student=
    {
        name:"Sujit",
        class:"12th",
        marks:[85,91,68,78,77,61]
    };
    console.log(student);

    console.log("----------------------------------");

    let sum=0;
    let index=0;

    while(index < student.marks.length){

       // console.log(student.marks[index]);

       sum=sum+student.marks[index];

       //console.log(sum);

        index=index+1;

    }
    student.percentage=sum/student.marks.length;

    console.log(student);
    console.log("------------------------------------");

    student.name="Sujit Patil";
    console.log(student);
