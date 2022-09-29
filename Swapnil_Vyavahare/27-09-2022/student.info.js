let studentinfo = [
    {
        name:"swapnil",
        age:23,
        phonenumber:[1234567890,9876543210,1237894560],
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
        isactive:true,
        rank:undefined,
        sportfacility:null

    },
    {
        name:"Joe",
        age:20,
        phonenumber:[896537232,857794534],
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
let i =0;
while(i<studentinfo.length){
    console.log(studentinfo[i].name);
    console.log(studentinfo[i].age);
    let j =0;
    while(j<studentinfo[i].phonenumber.length){
        console.log(studentinfo[i].phonenumber[j]);
        j++;
    }

    



    i++;
}