function doOperation (a,b){
    return function dosum(){
        return a + b;
    };
}
let bz = doOperation(10,30);
let s =bz();
console.log(s);