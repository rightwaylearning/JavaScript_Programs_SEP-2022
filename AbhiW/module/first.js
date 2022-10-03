let message = "Good Morning";

function sum(a,b)
{
    return a+b;
}

function sub(a,b)
{
return a-b;
}

function mul(a,b)
{
    return a*b;

}

function div(a,b)
{
    return a/b;
}


module.exports.msg=message;
module.exports.add=sum;
module.exports.min=sub;
module.exports.mul=mul;
module.exports.div=div;
