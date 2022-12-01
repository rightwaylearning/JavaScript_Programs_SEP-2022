let arr=[
    {
    name:"rutuja",
    age:22,
    gender:"f"
},
{
    name:"rutuja",
    age:22,
    gender:"M"
},
{
    name:"rutuja",
    age:22,
    gender:"F"
}
]
let arr1={male:0, female:0}

arr.filter((prop)=>{
   
    if(prop.gender=='M' || prop.gender=='m' )
    {
        arr1['male']=arr1['male']+1;
    }
     else if(prop.gender=='F' || prop.gender=='f' )
    {
        
        arr1['female']= arr1['female']+1;
    }

    
})
console.log(arr1);