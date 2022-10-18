let student_info_27_10=[{
    name:"priya",
    age:22,
    phonenumber:[9087674598,9096935146,962384496],
    school:{
        name:"svchsg",
        headmaster:"kawade",
        address:{
            line1:"shri chhatrapati",
            line2:"shrigonda",
            pincode:5648476
        }

    },
    isActive:true,
    rank:undefined,
    sportfacility:null
},
{
name:"swapnil",
age:23,
phonenumber:[9867459867,8765978645,9675432897],
school:{
    name:"gjsjug",
    headmaster:"kurumkar",
    address:{
        line1:"kawade nivas",
        line2:"shriginda",
        pincode:34567
    },
},
isActive:true,
rank:undefined,
sportfacility:null
},
{
    name:"priti",
    age:22,
    phonenumber:[9756478934,9089786756,9867598367],
    school:{
        name:"rtihfd",
        headmaster:"gaikwad",
        address:{
            line1:"chimbhale",
            line2:"shrigonda",
            pincode:349856
        },
    },
    isActive:false,
    rank:undefined,
    sportfacility:null
}
]
let i=0;
while(i<student_info_27_10.length){
    console.log("---------------");
    console.log(student_info_27_10[i].name);
    console.log(student_info_27_10[i].age);
    let j=0;
    while(j<student_info_27_10[i].phonenumber.length){
    console.log(student_info_27_10[i].phonenumber[j]);
    j=j+1;
    }
    console.log(student_info_27_10[i].school.name);
    console.log(student_info_27_10[i].school.headmaster);
    console.log(student_info_27_10[i].school.address.line1);
    console.log(student_info_27_10[i].school.address.line2);
    console.log(student_info_27_10[i].school.address.pincode);

    console.log("----------------");
    i=i+1;
}