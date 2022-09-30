let students_info=[
    {
        name:"Rushikesh",
        age:20,
        phone_no:[74629835612,8452098384,9173991782],
        school:{
            name:"smk",
            headMaster:"Kulkarni",
            address:{
                line1:"sarsvati mandir, h-56/78/90",
                line2:"a/p adheri, mumbai, mh",
                landMark:"south-east- road adheri mumbai",
                pin:457861
            },
        },
        inactive:true,
        rank:undefined,
        sportFacility:null
    },
    {
        name:"Ramesh",
        age:27,
        phone_no:[9287394637,9846420938,9825480938],
        school:{
            name:"smk",
            headMaster:"Kulkarni",
            address:{
                line1:"sarsvati mandir, h-56/78/90",
                line2:"a/p adheri, mumbai, mh",
                landMark:"south-east- road adheri mumbai",
                pin:457861
            },
        },
        inactive:true,
        rank:undefined,
        sportFacility:null
    },
    {
        name:"Ritesh",
        age:24,
        phone_no:[6387912048,9048297498,9727630096],
        school:{
            name:"smk",
            headMaster:"Kulkarni",
            address:{
                line1:"sarsvati mandir, h-56/78/90",
                line2:"a/p adheri, mumbai, mh",
                landMark:"south-east- road adheri mumbai",
                pin:457861
            },
        },
        inactive:true,
        rank:undefined,
        sportFacility:null
    },
]

let i=0;
while(i < students_info.length){
    console.log("-----------------------------------");
    console.log(students_info[i].name);
    console.log(students_info[i].age);
    let j=0;
       while(j < students_info[i].phone_no.length){
       console.log(students_info[i].phone_no[j]);
        j=j+1;
       }
    console.log(students_info[i].school.name);
    console.log(students_info[i].school.headMaster);
    console.log(students_info[i].school.address.line1);
    console.log(students_info[i].school.address.line2);
    console.log(students_info[i].school.address.landMark);
    console.log(students_info[i].school.address.pin);
    console.log(students_info[i].inactive);
    console.log(students_info[i].rank);
    console.log(students_info[i].sportFacility);
    console.log("-----------------------------------");
    i=i+1;
}