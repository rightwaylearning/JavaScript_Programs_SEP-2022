function test(a,b){
    let product = (a*a) + (2*a*b) + (b*b);
    return product;
}
//-------------------------------------------------
// arrow function
let r = (a,b)=>(a*a) + (2*a*b) + (b*b);
console.log(r(1,2));