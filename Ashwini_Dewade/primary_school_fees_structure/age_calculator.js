
function year_cal(birthyear){
    let cur_year=2022;
    let year = cur_year - birthyear;
    return year;
}

function month_cal(birthmonth){
    
return birthmonth;
   
}

function day_cal(birthdate){
let today=30;
let days=today-birthdate;

return days;

}
let a=year_cal(2019);
let b=month_cal(08);
let c=day_cal(20);

if(birthdate>15)
    birthmonth=birthmonth+1;


console.log("your child's age is " +a+ " years " +b+ " months " +c+ " days old ");

let age=(a*12)+b;
console.log(age);
if(age >= 24 && age <= 36){
    console.log("Play group :-   40000/-");
}else if(age > 37 && age <= 49){
    console.log("Nursery :- 45000/-");
}else if(age > 50 && age <=61){
    console.log("LKG: 55000/-")
}else if(age > 62 && age <= 73){
    console.log("UKG: 65000/-")
}else{
    console.log("sorry");
}