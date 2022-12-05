//Add  group in student object.



let Employee = [
    {
        name: "Rutuja",
        age: 35, 
        salary:45000

    },
    {
        name: "Athrav",
        age: 40,
        salary:35000

    },
    {
        name: "vilas",
        age: 46,
        salary:42000
    },
    {
        name: "Kauthale",
        age: 43,
        salary:20000
    },

];

console.log(Employee);
let i=0;
while(i<Employee.length)
{
    if(Employee[i].age<=40)
    {
        Employee[i].bonus=2000;
    }
     else if(Employee[i].age>40 &&Employee[i].age<=45){
        Employee[i].bonus=3000;

    }
    else{
        Employee[i].bonus=4000;
    }
    i++;
}
console.log(Employee);