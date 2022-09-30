console.log("Testing module exports and imports");
console.log("***Printing table***");
let a;
function table(a){
    console.log("printing table of ",a);
    for(let i=1;i<11;i++){
        console.log(a*i);
    }

}

module.exports.data= table;