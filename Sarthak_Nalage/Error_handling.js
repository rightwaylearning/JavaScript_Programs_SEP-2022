console.log("Error handling in java");
let a,b;
function addition1( a,  b)
{
    return (a+b);
}
let add;
 try{
    let add=addition(20,20);
    console.log(add);
 }catch(e){
    console.log(e.name);
    console.log(e.message);

}
finally{
    console.log("Error handling is done");
    console.log("programe is succesfully terminated");
}