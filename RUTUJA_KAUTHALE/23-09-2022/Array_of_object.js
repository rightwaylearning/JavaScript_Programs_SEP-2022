//Add  group in student object.



let student = [
    {
        name: "Rutuja",
        age: 12
    },
    {
        name: "Athrav",
        age: 20
    },
    {
        name: "vilas",
        age: 32
    },
    {
        name: "Kauthale",
        age: 23
    },

];

console.log(student);
let i=0;
while(i<student.length)
{
    if(student[i].age>20)
    {
        student[i].Group="Senior";
    }
    else{
        student[i].Group="junior";
    }
    i++;
}
console.log(student);