function test(){
    console.log("amount is collected ----shop 1");
    console.log("amount is collected ----shop 2");
    setTimeout(()=>console.log("amount is collected ----shop 3") ,10000);
    console.log("amount is collected ----shop 4");
}
test();
