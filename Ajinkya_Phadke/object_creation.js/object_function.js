let student = {
    fisrtName:"Ac",
    lastname:"arora"
};

  let copy = Object.create(student);
   copy.fisrtName = "Ac";
   copy.lastname = "arora";

  console.log(student);
  console.log(copy);
