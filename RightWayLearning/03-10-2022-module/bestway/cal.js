function sum(a,b){
    return a+b;
}

 function sub(a,b){
    return a-b;
}

// this one way to exports function for outer people
module.exports.sum = sum;
module.exports.sub = sub;