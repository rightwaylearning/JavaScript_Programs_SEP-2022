
let Employee=[
    {
        empName:"Vinayak",
        empAge:28,
        empSalary:42000
    },
    {
        empName:"Sandeep",
        empAge:32,
        empSalary:56000
    },
    {
        empName:"Sunil",
        empAge:42,
        empSalary:48000
    },
    {
        empName:"Ajay",
        empAge:48,
        empSalary:60000
    }
];

//console.log(Employee);


let i=0;

while(i < Employee.length){
    
     if(Employee[i].empAge >= 40 ){
    
       Employee[i].empGroup="Senior";
    
    }else 
    
    Employee[i].empGroup="Junior";

    if(Employee[i].empSalary>50000)
    {
      Employee[i].empupdateSalary=Employee[i].empSalary+(Employee[i].empSalary/100)*5;

    }else{

        Employee[i].empupdateSalary=Employee[i].empSalary+(Employee[i].empSalary/100)*10;

    }

    i=i+1;
}

console.log(Employee);
