function printdata(data,matchInfo){
    console.log(data.firstname);
    console.log(data.lastname);
    console.log(data.age);

    console.log(matchInfo.t20Match);
    console.log(matchInfo.odiMatch);
}
printdata(
    {
        firstname:"Mahendrasingh",
        lastname:"Dhoni",
        age:34
    },
    {
        t20Match:124,
        odiMatch:243
    }

)