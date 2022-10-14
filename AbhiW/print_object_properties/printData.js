


function printData(data){

    console.log(data.firstName);
    console.log(data.lastName);
    console.log(data.adr);


}
function pprintQ(quali){


    console.log(quali.degree);
}



let myData = {
    firstName : "Abhishek",
    lastName : "Wagh",
    adr : "Ahmednagar",
} ;
let qual = {
    degree : "Bachelor of COmputer science"
}

printData(myData);
pprintQ(qual);