function test(a,b){
    console.log(this.massage);
    console.log(a + b);

}
let obj = {massage:"hii good morning"};

test.call(obj,10,10);
test.apply(obj,[20,20]);

let obj1 = {massage:"kuldip rajput"}

let copymethod = test.bind(obj1,200,200);
copymethod();

console.log("------------------------------")







function sum(c,d){
    console.log(this.StudentName);
     console.log(c + d);
}

let Name = {StudentName:"Nirmal Rajput"};


sum.call(Name,30,30);
sum.apply(Name,[12,32]);


let Name3 = {StudentName:"vishva rajput"};

let copysamemethod1 = sum.bind(Name3,100,200)
copysamemethod1();

