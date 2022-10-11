let student = {
    firstName : " dhanu",
    lastName : " udar"
};
// single object;
// using Object object, create function method we are going to craete new copy

let copy = Object.create(student);
copy.fisrtName = " rutu";
copy.lastname = " nimbhore";

console.log(student);
console.log(copy)
