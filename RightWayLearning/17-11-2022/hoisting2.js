let foo = function(){
    console.log(b);
    function fun(){
        console.log(c);
    }
    let c= 30;
    fun();
}

foo();

var b = 20;