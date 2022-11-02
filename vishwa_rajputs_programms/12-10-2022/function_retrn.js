

function doOperation(a,b){

    return function doSum(){

        return a + b;
    }
}

let logic = doOperation(10,20, );

let n = logic();
console.log(n);