let student_info = [
    {
    name:"shiv",
    age: 23,
    mobilenum:[3245467878,5674839292,7584389392,6574738392],
    school:{
        name:"d.r high school",
        headmaster:"d n jadhav",
        aaddress:{
                 line1:"harchand nagar",
                 line2:"gabaji nagar",
                 landmark:"near petrol pump",
                pin: 453685                
                 }  
    
    
            },
       isactive:true,
       rank:undefined,
       sportfacility:null
    },
    
    {
        name:"nirmal",
        age: 25,
        mobilenum:[5463835467,6574869858,3254769454,65747756485],
        school:{
            name:"rdmp jr collgr",
            headmaster:"rajput sir",
            aaddress:{
                     line1:"at post dhule",
                     line2:"jayhindd coohe",
                     landmark:"bus stand",
                     pin: 657489               
                     }  
        
        
                },
           isactive:false,
           rank:undefined,
           sportfacility:null
        },
        {
        name:"jeet",
        age: 28,
        mobilenum:[5463835467,6574869858,3254769454,65747756485],
        school:{
            name:"nutanhigh school",
            headmaster:"patil sir",
            aaddress:{
                     line1:"at post pune",
                     line2:"nashik",
                     landmark:"mauli lance",
                     pin:655764              
                     }  
        
        
                },
           isactive:false,
           rank:undefined,
           sportfacility:null
        }
    ];
    let i = 0;
    while(i <student_info.length){
         console.log(student_info[i].name);
          console.log(student_info[i].age);
    
         let m = 0;
             while(m <student_info[i].mobilenum.length){
                 console.log(student_info[i].mobilenum[m])
                 m = m + 1;
             }
    
      console.log(student_info[i].school.name);
      console.log(student_info[i].school.aaddress.line1);
      console.log(student_info[i].school.aaddress.line2);
      console.log(student_info[i].school.aaddress.landmark);
      console.log(student_info[i].school.aaddress.pin);
    
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
      
      i = i + 1
    };