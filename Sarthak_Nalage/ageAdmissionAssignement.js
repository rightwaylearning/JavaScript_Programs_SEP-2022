//defining bDay, month, year param
let iBday, iMonth, iYear;
//set input  values to parameters
iBday=25;
iMonth=12;
iYear=2017;
let iDays ;
//seting values to formate also gives only one formate input else it requires extra control block to check give input
if (iBday > 15 && iBday <= 31) {
    iMonth++;
}
if (iDays != undefined && (iMonth == undefined && iYear == undefined)) {
    iYear = iDays / 365;
    iMonth = 6;
}//setting age for child ,whose days information is available

//calculate age
let age, month, cYear, cMonth;
cYear = 2022; cMonth = 11;
function calAge() {
    if (iDays == undefined) {
        age = cYear - iYear;
        if (cMonth > iMonth) {
            month = cMonth - iMonth;
        } else {
            age--;
            month = (12 - iMonth) + cMonth;
        }
    } else {
        age = iYear;
    }
}


calAge();
if (iDays == undefined)
    console.log("Your age is ", age, " year old and ", month, "months");
else
    console.log("Your  age is ", age, " old");

//which class does he/she get admission
if (age > 1 && age <= 3) {
    console.log("Play group : 40K");
} else if (age > 3 && age <= 4) {
    console.log("Nursery :45k");
} else if (age > 4 && age <= 5) {
    console.log("LKG: 55k");
} else if (age > 5 && age <= 6) {
    console.log("UKG :65k");
}
else {
    console.log("can't get admission ,sry!!!");
}
