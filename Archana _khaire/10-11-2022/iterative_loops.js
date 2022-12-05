let s = 1;
while(s<=10){
    console.log(s);
    s++;
}
console.log(".............................");
//1,3,5,9,11,13,15,17,19
let i = 1;
while(i<=20){
    if(i % 2== 0){
    i++;
    continue;
}
console.log(i);
console.log("I am logic");
i++;
}

console.log("==============================");

let arr=[10,25,30,35,40,45,50,55,60,65,70];
//serch for 65 is there or not
let index = 0;
while(index < arr.length){
    if(arr[index]!=300){
        if(index ==arr.length -1){
            console.log("The Number is not present");
            break;
        }
        index ++;
        continue;
    }
    console.log("30 number  index is "+ index);
    break;
}
