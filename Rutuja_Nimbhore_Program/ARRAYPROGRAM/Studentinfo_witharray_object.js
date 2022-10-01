
let Students_info=
[
{
    name:"rahul",
    age:23,
    mobno:[8767607311,8767471324,8767564839],
    shool:
    {
        name:"msg",
        haedMaster:"Kulkurni",
        address:
        {
            line1:"akurdi pune",
            line2:"shri sai colony",
            landMark:"pune",
            pin:414323,

         },

    },
    isActive:true,
    rank:undefined,
    sportFacility:null

},
{
    name:"rahul",
    age:23,
    mobno:[7867564634,8767471324,9878659867],
    shool:
    {
        name:"msg",
        haedMaster:"Kulkurni",
        address:
        {
            line1:"akurdi pune",
            line2:"shri sai colony",
            landMark:"pune",
            pin:414323,
        },
    },
    isActive:true,
    rank:undefined,
    sportFacility:null
},
{
    name:"nilam",
    age:18,
    mobno:[9867564523,9867898734,9878659867],
    shool:
    {
        name:"msg",
        haedMaster:"Kulkurni",
        address:
        {
            line1:"akurdi pune",
            line2:"shri sai colony",
            landMark:"pune",
            pin:414323,
        },
    },
    isActive:true,
    rank:undefined,
    sportFacility:null
}]

let i=0;
while(i<Students_info.length)
{
    console.log("----------------------------");
    console.log(Students_info[i].name);
    console.log(Students_info[i].age);
                j=0;
                while(j<Students_info[i].mobno.length)
                {
                    console.log(Students_info[i].mobno[j]);  //mobno iterated
                    j=j+1;
                }
    console.log(Students_info[i].shool.name);
    console.log(Students_info[i].shool.haedMaster);
    console.log(Students_info[i].shool.address.line1);
    console.log(Students_info[i].shool.address.line2);
    console.log(Students_info[i].shool.address.landMark);
    console.log(Students_info[i].shool.address.pin);
    
    console.log("----------------------------");
    i=i+1;

}



// we can also write this way
    //  j=0;   //local variable
    //  let pn=Students_info[i].mobno;// local variable
    //  while(j<pn.length)
    //  {
    //     console.log(pn.mobno[j]);  //mobno iterated
    //     j=j+1;
    //  }