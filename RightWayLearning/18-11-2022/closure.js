
function getInfo(){
     
    let message="Good morning";

     function sayHi(){
        let m ="Hi";
        console.log(m, message);
     }

    return sayHi;
}

let foo = getInfo();
foo(); //

// closure:- closure is a function that carry/preserve the out scope in it's inner scope