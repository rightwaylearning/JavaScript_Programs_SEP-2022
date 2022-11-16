
let arr=[10,20,30,40,50,60,70,80,90,100];

let i=0;

let n=25;

while(i<arr.length){

    if(arr[i]!=n){

        if(i==arr.length-1){

            console.log("10");
            
        }
       i++;
       continue;
    }else 

   // i++;
    console.log("position:"+i);
    break;

}
