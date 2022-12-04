
let birthYear=2018;
let d=new Date();
let n=d.getFullYear();
function getAge(birthYear){
    let currentDate=new Date();
    let currentYear=currentDate.getFullYear();
    let age=currentYear-birthYear;
    return age;
}

calculatedAge=getAge(birthYear);
console.log(calculatedAge);

if(calculatedAge >2 && calculatedAge <=3)
{
console.log("Play Group: 40000/-");
}

else if(calculatedAge >3 && calculatedAge <=4)
{
console.log("Nursary Group: 50000/-");
}

else if(calculatedAge >4 && calculatedAge <=5)
{
    console.log("LKG Group: 60000/-");
}

else if(calculatedAge >5 && calculatedAge<6)
{
    console.log("UKG Group: 70000/-");
}

else 
console.log("Sorry students age not matched");

