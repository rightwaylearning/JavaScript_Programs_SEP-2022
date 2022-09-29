
for(var i=1;i<=10;i=i+1){

   // console.log(i);
}

//console.log("-----");
//console.log(i);  //if i is initialised by let keyword the this statement will get error

let a = 10;
var b = 20;
{
    let m = 50;
    var c = 30;

    console.log(a);
    console.log(b);
    console.log(m);
    console.log(c);
}

console.log(a);
console.log(c); // variable c is initialized by var keyword so it has no block scope and it will get print
                // but if we want to print m which is init by let keyword the it will get error