
let student={
    firstName:"Rushikesh",
    lastName:"Patil",
};

console.log(student);

let obj2=Object.create(student);
obj2.firstName="Mahesh";
obj2.lastName="Patil";
console.log(obj2);

