//object
let obj={
    firstName:'mahesh',
    lastName:'sharma'

}
console.log(obj.firstName);
let key='lastName';
console.log(obj[key]);

//-------------------------------------------------------------
//symbol
let message={
    title:'regarding planning'
}
let uniquekey = Symbol('any message');
console.log(typeof uniquekey);
console.log(uniquekey);
message[uniquekey]='dont attack wait atleast today night';
console.log(message);
