
//self executing function
 function selexe(){
    return function(){
        console.log("sarthak");
    }
}
let m1=selexe();
m1();
//module.exports.m2=v;

//console.log(m1());
//console.log("sarthak");
//let v=undefined;
//console.log( v);


//(selexe())();
    