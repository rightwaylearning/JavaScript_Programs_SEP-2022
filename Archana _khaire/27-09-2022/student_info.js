let students_info =[{
    name: "Aryan",
    age: 15,
    pno :[8669200195,9975032670,9623865051],
    school : {
        name :"Bal Vikas Mandir",
        headMaster : "Ghose",
         address :{
            line1 : "Bhegvan Road, h-12/56",
            line2 : "Baramati",
            landmark : "Railway station near by",
            pin : 414202
         }   
    },
    isActive : false,
    rank : undefined

},
     {
        name : "Gaurav",
        age : 16,
        pno :[9960363257,9890050081],
        school : "M J ",
        headMaster : "Kale",
        address :{
            line1 : "JM Road,g-23,25,56",
            line2 : "supe",
            landmark : "Baburdi Road",
            pin : 454110
        },
        isActive : true,
        rank : undefined
     }
    ]

    let i =0;

    while(i< students_info . length){
        console.log("..............");
        console.log(students_info[i].name);
        console.log(students_info[i].age);
        let j = 0;
             while(j < students_info[i].pno.length){
                console.log(students_info[i].pno[j]);
                j = j + 1;

             } 
         console.log(students_info[i].school.name);
         console.log(students_info[i].school.headMaster);
         console.log(students_info[i].school.address.line1);
         console.log(students_info[i].school.address.line2);
         console.log(students_info[i].school.address.landMark);
         console.log(students_info[i].school.address.pin);
         console.log("............");
         i = i + 1;     
    }