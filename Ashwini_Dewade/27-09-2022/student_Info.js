let student = [{
    name:"Ashwini",
    Age:23,
    phone:[7039748558,8108593492],
    School:{
        name:"icl",
        head:"Anil sir",
        Address:{
            line1:"Icl Highschool turbhe",
            line2:"sector 22",
            landmark:"behind bus stop",
            pin:400705
        }
    },
    isActive:true,
    rank:undefined,
    sportfacility:null
},
{
name:"Mahesh",
    Age:23,
    phone:[7037648558,81078693492],
    School:{
        name:"icl",
        head:"Anil sir",
        Address:{
            line1:"Icl Highschool turbhe",
            line2:"sector 22",
            landmark:"behind bus stop",
            pin:400705
        }
    },
    isActive:true,
    rank:undefined,
    sportfacility:null
},
{
name:"Mayur",
    Age:21,
    phone:[76275759899,65987980980],
    School:{
        name:"icl",
        head:"anil",
        Address:{
            line1:"Icl Highschool turbhe",
            line2:"sector 22",
            landmark:"behind bus stop",
            pin:400705
            
        }
    },
    isActive:true,
    rank:5,
    sportfacility:null
},
]

let i=0;


while(i<student.length){

    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

    console.log(student[i].name);
    console.log(student[i].Age);
    
    let j=0;
    while(j<student[i].phone.length)
    {
        console.log(student[i].phone[j]);
        j=j+1;

    }

    console.log(student[i].School.name);
    console.log(student[i].School.head);
    console.log(student[i].School.Address.line1);
    console.log(student[i].School.Address.line2);
    console.log(student[i].School.Address.landmark);
    console.log(student[i].School.Address.pincode);
    console.log(student[i].isActive);
    console.log(student[i].rank);
    console.log(student[i].sportfacility);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
    i=i+1;

}

