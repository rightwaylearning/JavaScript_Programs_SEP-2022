console.log("Perform calcii Operation");
console.log("Addition");
let n1,n2;
function addition( n1, n2)
{
    console.log("Addition of ",n1," and ",n2, " is ",n1+n2);
}

function subtraction(n1,n2)
{
    console.log("Subatraction of ",n1," and ",n2, " is ",n1-n2);
}

module.exports.addition= addition;
module.exports.subtraction=subtraction;