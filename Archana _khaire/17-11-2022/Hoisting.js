let foo = function(){

    console.log(a);

    function fun(){
        console.log(c);
    }

    let c = 100;
    fun();
}

foo();

var a = 50;