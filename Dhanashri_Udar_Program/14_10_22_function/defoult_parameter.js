function foo(x=100){
    console.log(x);

}
foo(10);
foo();

function sum (a=20,b=20){
    console.log(a+b);
}
sum();
sum(200,300);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function doOt(a,b,c){
    console.log(a,b,c);
}
doOt(10);
doOt(10,20);
doOt(10,20,30);
