let i = 10;

while(i <= 100){
    console.log(i);
    i++;
}
   // Print 10 to 100 numbers.
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

let p = 91;
while(p <= 100){
  
    if(p % 2 == 0){
         p++;
        continue;
    }
      
    console.log(p);
    console.log("I am 20 line B logic");
    p++;

    // Print 91 to 100 Odd Numbers.
    // = 91,93,95,97,99 

}
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

let arr = [10,20,30,40,50,60,70,80,90,100];
// search 60 is there or not;
// logic.
let index = 0;

while(index < arr.length){
   if(arr[index] != 600){
      if(index == arr.length - 1){
        console.log("Number is not present");
        break;
      }
      index++;
      continue;
   }

   console.log(" 60 number index is "+ index);
   break;

}
