function few(){
    var a = 45;
    return function fun(){
        console.log(a);
    }
}

let f1 = few();
f1();

