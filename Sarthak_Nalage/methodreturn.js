
//self executing function
 function selexe(){
    return function(){
        console.log("sarthak");
    }
}
let m1=selexe();
console.log(m1());
//console.log("sarthak");
let v=undefined;
console.log(typeof v);


//(selexe())();
    