
function outer(masaage){
    return function(name){

        return masaage +" "+ name
    }
}
let inner = outer("nirmal");

let output = inner("good morning");
console.log(output);

let output1 = inner("rajput") 
console.log(output1);




function m(msg){
    return function(givename){
        return msg + " "+ givename
    }
}
let s =  m("divya");
let o = s("rajput");
console.log(o);


function m1(msg1){
    return function(name1){
        return msg1+" "+name1
    }
}
let z = m1("nirmal")
let y = z("with divya")
console.log(y);





function getinfo(){

    let msg = "hii i am nirmal"

    function sayhello(){
        let maasage = "hello";
        console.log(msg,maasage)

    }
    return sayhello;
}
let g = getinfo()
g();




function gethii(){
    let msg = "hii i am a nirmal"

     function getdivya(){
        let msg1 = " hii i am divya"
        console.log(msg,msg1)
    } 
    return getdivya;
}
let k = gethii();
k();

