var a = 10;

function test(){
    var aa = 100;
   
}

test();
console.log(a);
// here we can't access aa becuase that aa have function body scope, it's declared inside function we can't access it.4
// error
console.log(aa);
