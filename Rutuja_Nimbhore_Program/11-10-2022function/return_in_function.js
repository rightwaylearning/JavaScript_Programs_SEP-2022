test();
function test(){ 
    console.log("hello");
}




let k;
console.log(typeof k);


function sum(){
    let sum=0;
    for(let i=0; i<arguments.length; i++){
            sum=sum+arguments[i];
    }
    console.log(sum);
}
sum(10,2,4,6,7,8,9,34);

var msg;
console.log(msg);