
let students_info = [{
    name:"Ashok",
    age:23,
    phoneNumber:[9422947835,9309547972,9309567438],
    school:{
        name:"smk",
        headMaster:"Kulkarni",
        address:{
            line1:"sarsvati mandir, h-56/78/90",
            line2:"a/p adheri, mumbai, mh",
            landMark:"south-east- road adheri mumbai",
            pin:457861
        }
    },
    isActive:true,
    rank:undefined,
    sportFacility:null
},
{
    name:"Mahesh",
    age:22,
    phoneNumber:[8976543467,8976543678,9867543978],
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
    isActive:true,
    rank:undefined,
    sportFacility:null
},
{
    name:"Joe",
    age:20,
    phoneNumber:[896537232,857794534],
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
    isActive:false,
    rank:undefined,
    sportFacility:null
}
]

let i = 0;

while(i < students_info.length){
    console.log("------------------------------");
    console.log(students_info[i].name);
    console.log(students_info[i].age);
    let j =0;
        while(j < students_info[i].phoneNumber.length){
            console.log(students_info[i].phoneNumber[j]);
            j =j + 1;
        }
    console.log(students_info[i].school.name);
    console.log(students_info[i].school.headMaster);
    console.log(students_info[i].school.address.line1);
    console.log(students_info[i].school.address.line2);
    console.log(students_info[i].school.address.landMark);
    console.log(students_info[i].school.address.pin);

    console.log("-------------------------------");
    i = i+1;
}
























