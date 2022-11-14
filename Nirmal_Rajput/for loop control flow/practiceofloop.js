 let arr = [10,20,30,40,50];
 
 for(index = 0; index < arr.length; index++){
if(arr[index] != 30){
    if(index == arr.length){
        console.log("number is not found");
        
        break;
    }
continue;
}
console.log(index);
break;

 }

console.log("----------------------------------------------");
   let aaray = [10,11,12,13,14,15,16];
   for(index = 0; index<aaray.length;aaray++){
    if(aaray[index] != 15){
        if(index ==aaray.length){
            console.log("not found number");
            break;
        }
        continue;
    }
console.log(index);
break;


   }