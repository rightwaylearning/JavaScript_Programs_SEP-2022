let arr = [1,2,3,4,5,6,7,8,9,10];

let index = 0;

while(index < arr.length){
   if(arr[index] != 50){
      if(index == arr.length - 1){
        console.log("Number is not present");
        break;
      }
      index++;
      continue;
   }

   console.log(" 5 number index is "+ index);
   break;

}

//-------------------------------------------------------

let arr1 = [100,200,300,400,500,600,700,800,900,1000];

let index1 = 0;

while(index < arr.length){
   if(arr[index] != 500){
      if(index == arr.length - 1){
        console.log("Number is not present");
        break;
      }
      index++;
      continue;
   }

   console.log(" 5000 number index is "+ index);
   break;

}