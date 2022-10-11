let Employee =[
    {
      name:"Swapnil",
      salary:4000,
      age:29
    },
    {
      name:"vilas",
      salary:5000,
      age:54
    },
    {
      name:"shubham",
      salary:9000,
      age:23
    },
    {
      name:"sunil",
      salary:8000,
      age:50
    },
    {
        name:"nilesh",
        salary:5000,
        age:34
    }
  ];
  
  let index  = 0;
  while(index < Employee.length){
      
      if(Employee[index].age >= 40){
          Employee[index].group = "s group"; 
      }else{
          Employee[index].group = "J group"; 
      }
     index = index + 1;
  }
  
  console.log(Employee);
  
  