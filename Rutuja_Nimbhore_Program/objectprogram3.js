function printData(data,secondData)
{
    console.log(data.firstName);
    console.log(data.secondName);
    console.log(data.age);

    console.log(secondData.secondName);
    console.log(secondData.firstName);
    console.log(secondData.age);

}
printData(
{
    firstName:"Rutuja",
    secondName:"Nimbhore",
    age:23    
},
{
    firstName:"Dhanu",
    secondName:"Udar",
    age:23
});
