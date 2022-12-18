// generally explains about whereby the declarationi is done and where you are going to access it so it can be explalined according to Execution context has been divided as Memory allocation and Execution context

function test(){
    let msg;
    console.log(msg);
    msg="sarthak";
 console.log(test1);
  //  test1();
}
test();
let test1=function()
{
    console.log("Sarthak is Here");
}
// test();