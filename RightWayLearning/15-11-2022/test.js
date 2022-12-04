let fullName = function(message){
    console.log(message);
    console.log(this.fisrtName +' '+this.lastName);
}

let name1 = {
   fisrtName:"A",
   lastName:"B",
}

let name2 ={
    fisrtName:"M",
    lastName:"N",
}

fullName.call(name1,"Hello I am name1 object");
fullName.call(name2,"Hello I am name2 object");
// OR
fullName.apply(name1,["Hello I am name1 object"]);
fullName.apply(name2,["Hello I am name2 object"]);

// angle 1: here fullName have type that is Function >> but sir function is instance of Object type so we can say 
// function is laso object
// angle 2: every object have propetries & method
 //  like verey function have propetries & method
// length & prototype , call(), apply() & bind() 