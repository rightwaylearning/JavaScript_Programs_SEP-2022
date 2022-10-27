

function myFunction() {
    return function () {
        console.log("My return function");
    };
}
let getData = myFunction();
getData();
// Output: My return function
console.log("==================================")

function test(a) {
    console.log(a);
}
test(10);
// Output: 10
console.log("==================================")

function fruits(passFruits) {
    return passFruits;
}

let basket = fruits(
    function () {
        console.log("Apple")
    }
)
basket();
// Output: Apple
console.log("==================================")



