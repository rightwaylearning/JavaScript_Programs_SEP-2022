let i = 1;
while(i<=10){
    console.log(i);
    i++
}
console.log(">>>>>>>>>>>>>>>>>>>>");
// 1 3 5 7 9

let p = 1;
while(p<=10){
    if(p % 2 == 0){
        p++
        continue;
    }
    console.log(p);
    console.log("Iam 20 line bc logic");
    p++
}
console.log(">>>>>>>>>>>>>>>>>>>>");

let arr =[10,20,30,40,50,60,70,80,90,100];

//search 60 is there or not
//logic

let index = 0;
while(index < arr.length){
    if(arr[index]!=600){
        if(index == arr.length - 1){
            console.log("Number is not present");
            break;
        }
        index++;
        continue;
    }
    console.log("60 number index is"+index);
    break;
}


