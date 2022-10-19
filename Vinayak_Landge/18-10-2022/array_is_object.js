
let obj = {
    name :"mahesh",
    age:23,
    "05dt":"march"
  };
  // case 1, I dont know about keyname
  let keyName = 'name';
  console.log(obj[keyName]); 
  
  console.log(obj.name); 
console.log(obj.age);
// OR
console.log(obj['name']);
console.log(obj['age']);

// case 3 you know your key but sir your key not legal
console.log(obj['05dt']);