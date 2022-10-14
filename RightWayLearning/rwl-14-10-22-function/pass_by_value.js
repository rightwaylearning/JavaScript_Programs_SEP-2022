

function updateMe(x){
    x = x + 20;
    console.log(x);
}

let y = 20;
updateMe(y);
console.log(y);

console.log("-------------------");

function updateObject(obj){
   obj.key = 200;
   console.log(obj);
   console.log("-------------------------");
}

let myObj = {
    key:20
}
updateObject(myObj);
console.log(myObj);
























