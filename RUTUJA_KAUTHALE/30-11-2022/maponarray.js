let arr=[
    {
    name:"rutuja",
    age:22,
    gender:"M"
},
{
    name:"rutuja",
    age:22,
    gender:"M"
},
{
    name:"rutuja",
    age:22,
    gender:"M"
}
]
let arr1={male:0, female:0}

arr.filter((prop)=>{
    for(let i=0; i<arr.length;i++)
    {
    if(arr[i].gender)
    {
        let count= arr1[prop];
        count++;
        arr1[prop]=count;
    }
}
    
})
console.log(arr1);