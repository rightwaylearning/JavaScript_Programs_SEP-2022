
/*
In programming language design, a first-class citizen in 
a given programming language is an entity which supports 
all the operations generally available to other entities

*/

function doOperation(a,b){
    return function doSum(){
        return a + b;
    };
}

let bz = doOperation(10,20);
let s =bz();
console.log(s);

