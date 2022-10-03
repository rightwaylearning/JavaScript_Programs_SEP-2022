function printdata(data,matchinfo){
console.log(data.firstname);
console.log(data.data);
console.log(data.age);


console.log(matchinfo.t20match);
console.log(matchinfo.oneday);
    
}

printdata({
    firstname: "sachin",
    data: "tendulkar",
    age:23
},
{
    t20match: 216,
    oneday: 142
})

