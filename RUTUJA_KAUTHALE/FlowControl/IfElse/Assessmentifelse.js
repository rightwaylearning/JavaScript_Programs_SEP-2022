let birthyear= 2019;
let birthmonth=7;
let birthdate=23;

let year= 2022 - birthyear;
let currentmonth =11-birthmonth;
console.log(year);
console.log("birthdate is: "+birthdate);
console.log("birthmonth is: "+birthmonth);
console.log("birthyear is : "+birthyear);

if (birthdate >=15){
    
    currentmonth++;
    if (currentmonth>=6)
    {
    year++;
    }
    
}
else{
    if (currentmonth>=6)
{
    year++;
}
}

console.log("Actual age of student is:"+year);

let age= year;

if(age>=2 && age<=3)
{
    console.log("play group  :   40000/-");

}
if(age>=3 && age<=4)
{
    console.log("Nursery  :   45000/-");
    
}
if(age>=4 && age<=5)
{
    console.log("LKG  :   50000/-");
    
}
if(age>=2 && age<=3)
{
    console.log("UKG  :   40000/-");
    
}


