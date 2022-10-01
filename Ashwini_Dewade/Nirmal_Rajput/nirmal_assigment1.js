let employee =[
    {
     name:"nirmal",
     salary: 20000,
     age:22
    },

   {
     name:"kuldip",
     salary: 21000,
     age:23
    },

    {
     name:"indra",
     salary: 17000,
     age:24
    },

    {
     name:"darpan",
     salary: 18000,
     age:25
    },
    {
     name:"prashu",
     salary: 50000,
      age:26
    }
 ];

  index = 0;

    while(index < employee.length){
        console.log(employee[index]);

   if(employee[index].salary == 9000){

    employee[index].group = "good package person";
  }
   else{

    employee[index].group = "average package person";
   }

   index = index + 1;

 }

  console.log(employee);

