function printData(data, matchInfo){
    console.log(data.firstName);
    console.log(data.lastName);

    console.log(matchInfo.t20Match);
    console.log(matchInfo.odiMatch);
}


printData({
    firstName:"Virat",
    lastName:"kohli",
    age:33
    },{
        t20Match:100,
        odiMatch:250
    });
