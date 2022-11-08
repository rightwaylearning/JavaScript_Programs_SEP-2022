let obj={
    firstName:'Mahesh',
    lastName:'Dewade'
}
console.log(obj.firstName);
//let key = obj.lastName;
//or
let key='lastName';
console.log(obj[key]);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

let message ={
    title:'This is Practise',
    heading:'Symbol Practice'
}

let uniqueKey = Symbol('any message');
console.log(typeof uniqueKey);
console.log(uniqueKey);

message[uniqueKey]='Still confused about how symbol work internally';

console.log(message);
console.log(message[uniqueKey]);