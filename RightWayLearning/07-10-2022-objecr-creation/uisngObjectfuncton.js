let student = {
    fisrtName:"MK",
    lastname:"gandhi"
};
// single object;
// using Object object, create function method we are going to craete new copy
  let copy = Object.create(student);
   copy.fisrtName = "GK";
   copy.lastname = "gandhi";

  console.log(student);
  console.log(copy);
//




