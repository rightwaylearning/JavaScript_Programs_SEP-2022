console.log("@@@ Logical (And) Operation @@@");
function m1(){
    console.log("Hii I'm method 1");
    return true;
}
 function m2(){
    console.log("Hii, I'm method 2");
    return false;
 }
  if(m1() && m2()){
    console.log(m1());
  }else{

    console.log(m2());
  }
 console.log("\n");
  console.log("@@@ Logical Operation(OR) @@@");
  function m1(){
    console.log("Hii I'm method 1");
    return false;
}
 function m2(){
    console.log("Hii, I'm method 2");
    return true;
 }
  if(m1() || m2()){
    console.log(m1());
  }else{

    console.log(m2());
  }