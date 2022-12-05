function getInfo(){

    let  message= " How Are You";

    function sayHi(){
        let m = "Hi";
        console.log(m,message);
    }

    return sayHi;
}

let foo = getInfo();
foo();
// console.log(fun);