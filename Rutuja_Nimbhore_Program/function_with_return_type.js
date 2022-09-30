
// in javascript variable are typeless, value have type , according to data/
// value assigned to variable we are going to decide data type of that variable


console.log("---------------------------")
let x;
console.log(typeof x);

x=12;
console.log(typeof x);

 x={};
console.log(typeof x);

x=[];                            //array also object type
console.log(typeof x);

x=function(){
};
console.log(typeof x);

x=true;
console.log(typeof x);

x=null;                              // this is also object type beacuse bug in java script
console.log(typeof x);


x="abc";                             
console.log(typeof x);

x='a';                             ///this is also string data type                            
console.log(typeof x);

console.log("---------------------------")





function getData()
{
    let f=function()
        {
            console.log("hello my name is rutu");
        }
    return f;
    
}

let data=getData();
data();