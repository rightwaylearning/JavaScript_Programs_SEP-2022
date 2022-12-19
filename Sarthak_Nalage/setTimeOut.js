// console.log("Js in single threaded programing langauage that's why it is Synchronous by default so make it as asynch we have to use setTimeout() which is call back function and it is third party webAPI");

//use in case that corresponding programe need more time so we have to care that the single thread must not be block

function performMainTask(a,b){
    console.log("Inside the fun1 in synchronous manner");
    setTimeout(Task2,3000);
    console.log("calling in progress!!");
    return a+b;
}

function Task2(){
    console.log("Hello India");
}

console.log(performMainTask(23,22));