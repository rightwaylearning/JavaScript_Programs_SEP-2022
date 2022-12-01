function  foo(data){
    console.log("HI , I done my work");
}

console.log("I am fisrt line");
let flag = true;
let cnt = 1;

while(flag){
    cnt++;
    if(cnt > 10000000000){
        flag = false;
         foo();
    }
}

console.log("I am last line");

