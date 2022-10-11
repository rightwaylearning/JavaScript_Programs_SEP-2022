let student={
    firstName:"MK",
    lastName:"ganesh",
};
let copy = Object.create(student);
copy.fisrtName = "GK";
copy.lastname = "gandhi";

console.log(student);
console.log(copy);
