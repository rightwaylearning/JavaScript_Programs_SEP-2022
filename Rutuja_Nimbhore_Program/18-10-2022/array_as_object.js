let arr=['AA','BB','CC','DD'];

let arr1={
    '0':'A',
    '1':'B',
    '2':'C',
    '3':'D',
    length:4,
    foo:function(){
        console.log("i am foo");
    }
};



arr1.name="mahesh";
arr1.age="34";
arr1.doWork=function(){
    console.log(">>>>>>>>>>>>>>>>>>>");
}

arr1.foo();
console.log(arr1);


//same operation on arr
console.log(">>>>>>>>>>>>>>>>>>>");
arr.name="mahesh";
arr.age=40;
console.log(arr);
arr.doWork=function(){
    console.log(">>>>>>>>>>>>>>>>>>>");
}
console.log(arr);
