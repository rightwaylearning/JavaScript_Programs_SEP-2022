// creat one array of Employee object
// Employee objects properties
/* 
   name:
   salary:
   age:
 */
// 40 +>> Employee  cateriges : " s" or "j"


//    let n="abc";  
  //  let a= int;
 
    let Employee=[
        {
            name:"Archana",
            salary:25000,
            age:36
        },
        {
            name:"Saee",
            salary:20000,
            age:30
        },
        {
            name:"Sharayu",
            salary:36000,
            age:45
        },
        {
            name:"Nilam",
            salary:21000,
            age:40
        }
    ];
      let index=0;
      while(index< Employee.length){ 

      if(Employee[index].age>=40){

        Employee[index].cat="Senior";


      }else{

        Employee[index].cat="Junior";
      }
         index =index + 1;
    }    
     console.log(Employee);   

    
      
