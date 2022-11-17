function test(){
    console.log('I am second line');
}

console.log("I am first line");  // 1

setTimeout(test,5000);  // 3

console.log("I am third line");  // 2