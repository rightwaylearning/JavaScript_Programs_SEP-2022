let arr = [10,20,30,40];

let sum = 0;
for(let i =0 ; i <arr.length ; i++){
    sum = sum + arr[i];
}

//console.log(sum);

let result = arr.reduce(test,0);

function test(sum,elm,index,array){
    return sum = sum + elm;
}

//console.log(result);

let result1 = arr.reduce((sum,elm) =>sum = sum + elm,0);



console.log(result1);













