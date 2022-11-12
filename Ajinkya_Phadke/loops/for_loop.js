
let arr = [1,2,3,4,5,6,7,8,9,10];

for(let index = 0; index < arr.length; index++){
   if(arr[index] != 60){
      if(index == arr.length - 1){
        console.log("Number is not present");
        break;
      }
      continue;
   }

   console.log(" 6 number index is "+ index);
   break;

}