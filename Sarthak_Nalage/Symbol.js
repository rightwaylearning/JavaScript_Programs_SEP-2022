console.log("Symbol data type(primitive)");
let obj={
    name:"sarthak",
    roll:47
}

let msg=Symbol("You're superhero");
obj['message']=msg;
console.log(obj);
let sec_name=Symbol('name');
console.log(obj['sec_name']);
//conclusion : Not clearity in Symbol data type