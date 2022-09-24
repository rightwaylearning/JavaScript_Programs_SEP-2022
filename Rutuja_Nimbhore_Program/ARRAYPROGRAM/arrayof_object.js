let students=[
    { name:"A",
     age:23
    },
    { 
        name:"B",
     age:10
    },
    { name:"C",
     age:8
    },
    { name:"D",
     age:11
    }
];
console.log(students);
let index=0;
while(index<students.length)
{
   if(students[index].age>=10)
   {
      students[index].group="Big group";
   }
   else
   {
    students[index].group="small group";
   }
   index=index+1;
}
console.log(students);