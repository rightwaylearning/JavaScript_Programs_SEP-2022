function testMe(a,b){
    console.log(this.message);
    console.log(a + b);
}

let obj1 = {message:"HI hello"}

testMe.call(obj1,10,20);
testMe.apply(obj1,[100,20]);


let obj2 = {message:"please guys take care"}

let copySameMethod = testMe.bind(obj2,100,200);
copySameMethod();
