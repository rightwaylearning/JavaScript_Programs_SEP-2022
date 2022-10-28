
function EmployeInfo(firstName,lastName){
    return function(){

        console.log(firstName + " " + lastName);

    };
}

EmployeInfo("Rushikesh","Patil")();