function calculateAge(birthDate){
let now = new Date();
let currentYear = now.getfullYear();
let birthYear = birthDate.getFullYear();
let = currentYear - birthYear;
if(now < new Date(birthDate.setFullYear(currentYear))){
    age = age-1;
}
return age;

}
console.log(calculateAge(new Date(1982,11,4)));
console.log(calculateAge(new Date(1962,0,1)));