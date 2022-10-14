

function print(n){
    let i =1; 
    
    while(i<=n){
        let j =1;
       // while(j<100000000){j++;}
        console.log(i);
        i++; // i = i+1;
    }
}

print(10);
//==========================================================
console.log("==============================================");

function foo(n){
    if(n <= 10){
       console.log(n);  // 1 2 ...10
       n = n +1;
       foo(n);
    }
}


// 1 to 10
let n= 1;
foo(n)




















