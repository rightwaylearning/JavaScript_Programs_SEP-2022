let employee =[
    {
     name:"nirmal",
     salary: 5000,
     age:22
    },

   {
     name:"kuldip",
     salary: 6000,
     age:23
    },

    {
     name:"indra",
     salary: 7000,
     age:24
    },

    {
     name:"darpan",
     salary: 8000,
     age:25
    },
    {
     name:"prashu",
     salary: 9000,
      age:26
    }
 ];

  index = 0;

    while(index < employee.length){
        console.log(employee[index]);

   if(employee[index].salary >= 7000){

    employee[index].group = "senior person";
  }
   else{

    employee[index].group = "juniour person";
   }

   index = index + 1;

 }

  console.log(employee);

