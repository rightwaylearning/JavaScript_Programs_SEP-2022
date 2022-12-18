console.log("Dipslaying male and female counts in data");
let original=[
    {
        name:"Sarthak",
        gender:"male"
    },
    {
        name:"Apeksha",
        gender:"female"
    },
    {
        name:"Vedant",
        gender:"male",

    },{
        name:"sangram",
        gender:"male"
    }
]
let getcount={};
original.filter((obj)=>{
    if(getcount[obj.gender]){
        getcount[obj.gender]++; }
    else{
        getcount[obj.gender]=1;
    }
})
console.log(getcount);