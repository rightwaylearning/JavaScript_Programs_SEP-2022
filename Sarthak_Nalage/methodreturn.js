
//self executing function
 function selexe(){
    return function(){
        console.log("sarthak Nalage");
        //return "undefined*";
    }
}
//let m1=selexe();
//console.log(m1());
//module.exports.m2=v;

//console.log(m1());
//console.log("sarthak");
// let v;
// console.log( v);
// selexe()();
let i=1;
function recs(n){

    if(n>=1){
    
    console.log(i);
    i++;
   // console.log(n);
    recs(n-1);
}
}
recs(10);
    