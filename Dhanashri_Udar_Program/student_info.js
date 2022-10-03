let students_Info =[{
    name : "Dhanshri",
    age : 23,
    phoneNo :[8767474317,9421478465],
    school :{
        name:"smk",
        headMaster :"Kulkari",
        address : {
            line1:"Akurdi,pune",
            line2:"Akurdi Railway Station",
            landMark:"Sai colony",
            pinCoad:234532
        }
     },
     isActive: true,
     rank:undefined,
     sportFacltiy:null

},
{
    name : "Rutuja",
    age : 23,
    phoneNo :[8767474317,9421478465,9623342404],
    school :{
        name:"smk",
        headMaster :"Kulkari",
        address : {
            line1:"Akurdi,pune",
            line2:"Akurdi Railway Station",
            landMark:"Sai colony",
            pinCoad:234532
        }
     },
     isActive: true,
     rank:undefined,
     sportFacltiy:null


},
{
    name : "Balu",
    age : 25,
    phoneNo :[8767474317,9421478465,],
    school :{
        name:"smk",
        headMaster :"Kulkari",
        address : {
            line1:"Akurdi,pune",
            line2:"Akurdi Railway Station",
            landMark:"Sai colony",
            pinCoad:234532
        }
     },
     isActive: true,
     rank:undefined,
     sportFacltiy:null
}
]
    let i = 0;
    while(i < students_Info.length) {

        console.log("------------------------");
        console.log(students_Info[i].name);
        console.log(students_Info[i].age);

                let j =0;
                while(j < students_Info[i].phoneNo.length){
                    console.log(students_Info[i].phoneNo[j]);
                    j = j +1;
                }
        console.log(students_Info[i].school.name);
        console.log(students_Info[i].school.headMaster);
        console.log(students_Info[i].school.address.line1);
        console.log(students_Info[i].school.address.line2);
        console.log(students_Info[i].school.address.landMark);
        console.log(students_Info[i].school.address.pinCoad);    




        console.log("------------------------");
        i = i + 1;


    }
