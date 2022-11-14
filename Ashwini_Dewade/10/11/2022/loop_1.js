
let arr=[10,20,30,40,50,60,70,80,90,100];
 for(let i=0;i<arr.length;i++){
    if(arr[i]!=60){
        if(i==arr.legth-1){
            console.log("Number is absent");
        }
       // i++;
        continue;
    }
        console.log("number is present at "+i);
    break;

 }

 /*let i=0;
 while(i<arr.length){
    if(arr[i]!=60){
        if(i==arr.length-1){
            console.log("number is present at", +i);
        
        }
        i++;
    continue;
       
    }

    console.log("number is present at", +i);
     break;
    
}*/
 