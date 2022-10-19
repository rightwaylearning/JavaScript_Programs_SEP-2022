let obj={
    name:"mahesh",
    age:23,
    "09date":"march"

};

//case1-i dont know about keyname
let keyName='name';
console.log(obj[keyName]);


//case2 i know about keyName and my key is legal key
console.log(obj.name);
console.log(obj.age);

//or
console.log(obj['name']);
console.log(obj['age']);

//case3 : you know your key but sir your key not legal.

console.log(obj['09date']);