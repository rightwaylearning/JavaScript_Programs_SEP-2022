let Employee=[
    {name:"sarthak",salary:75000,eid:1,age:20},{name:"Raj",salary:100000,eid:2,age:25},{name:"Ram",salary:50000,eid:3,age:40},
    {name:"Sita",salary:70000,eid:4,age:45}
]
let inx=0;
while(inx<Employee.length)
{
    if(Employee[inx].age<40){
        Employee[inx].emp_Cat="jnr";
    }
    else{
        Employee[inx].emp_Cat="snr";
    }
    inx++;
}
console.log(Employee);