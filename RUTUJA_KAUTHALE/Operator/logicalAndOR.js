let hsc=72;

let ssc=65;

if((hsc>70)&& (ssc>60))
{
    console.log("Student is eligible to seat for exam");

}
else{
    console.log("Student is  not eligible to seat for exam");
}


console.log("  ");
function exp1()
{
    console.log("Hi. I am expression one");
    return 10;
}

function exp2()
{
    console.log("Hi. I am exp2");
    return 30;
}
// for the below 1st block is true hence control goto to 2nd expression 
// to check the is it true or not
console.log("  ");
console.log("Example 1 of  &&");
let a = 10, b=20
if(a==exp1() && b==exp2())
{
    console.log("true");
}
else{
    console.log("false");
}
console.log("  ");
console.log("Example 1 of ||");


if(a==exp1() || b==exp2())
{
    console.log("true");
}
else{
    console.log("false");
}
console.log("  ");
console.log("  ");
console.log("Example 2 of  &&");
//here 1st expression is false hence control never goes to 2nd exp to check
// i.e here short circuit occur.
let c = 11, d=20
if(c==exp1() && d==exp2())
{
    console.log("true");
}
else{
    console.log("false");
}
console.log("  ");
console.log("Example 2 of ||")
if(c==exp1() || d==exp2())
{
    console.log("true");
}
else{
    console.log("false");
}
console.log("  ");
console.log("  ");
console.log("Example 3 of  &&");
//here 1st expression is true hence control n goes to 2nd exp to check

let e = 10, f=30;
if(e==exp1() && f==exp2())
{
    console.log("true");
}
else{
    console.log("false");
}
console.log("  ");
console.log("Example 3 of  ||");

if(e==exp1() && f==exp2())
{
    console.log("true");
}
else{
    console.log("false");
}

