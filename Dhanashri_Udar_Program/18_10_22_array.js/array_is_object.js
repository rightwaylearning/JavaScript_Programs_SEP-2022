let obj = {
    name :"Rohit",
    age:23,
    "09date":"march"
  };
  // case 1, I dont know about keyname
  let keyName = 'name';
  console.log(obj[keyName]); 
  
  // case 2 , I know about keyname , & my key is legal key
  console.log(obj.name); 
  console.log(obj.age);
  // OR
  console.log(obj['name']);
  console.log(obj['age']);
  
  // case 3 you know your key but sir your key not legal
  console.log(obj['09date']);
  