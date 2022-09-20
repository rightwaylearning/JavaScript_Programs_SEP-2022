function printData(data,matchInfo){
    console.log(data.firstName);
    console.log(data.lastName);

    console.log(matchInfo.t20Match);
    console.log(matchInfo.testMatch);



}
printData({
    firstName : "Rohit",
    lastName : 'Sharma',
},{
    t20Match : 123,
    testMatch :234,
});