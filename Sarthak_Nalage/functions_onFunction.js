console.log("Defining some of the functions like call ,apply and bind on object so that it can aquire the behaviour");
// call function

function cl(a,b){
    console.log('hello '+ this.getname);
    console.log(a+b);
}

let obj1={
    getname:"sarthak"
}

cl.call(obj1,10,20);

// same function can be take temporarly by apply function call
cl.apply(obj1,[12,12]);

// bind = above methods get temporarly added to the obj and gets called instantly so bind() comes in picture in that the exact copy of that function is create in user defined function 

function test_bind(greet){
    console.log(greet);
    return greet+ this.name;
}

let obj2={
    name:"sarthak"
}

let bind_store= test_bind.bind(obj2,'dodo');
let ret=bind_store("Hello Good Morining");
console.log(ret);