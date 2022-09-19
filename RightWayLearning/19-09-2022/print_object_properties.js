

function printData(data, matchInfo){
    console.log(data.firstName);
    console.log(data.lastName);

    console.log(matchInfo.t20Match);
    console.log(matchInfo.odiMatch);
}


printData({
    firstName:"Rohit",
    lastName:'Sharma',
    age:34
    },{
        t20Match:124,
        odiMatch:243
    });


















