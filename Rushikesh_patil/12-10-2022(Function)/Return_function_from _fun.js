
function nameEmploee(firstName,lastName){
    return function employeeInfo(){
        return firstName + " " + lastName;
    };
}

console.log(nameEmploee("Rushikesh","Patil")());





function doOperation(a,b){
    return function doSum(){
        return a + b;
    };
}

let bz = doOperation(10,20);
let s =bz();
console.log(s);