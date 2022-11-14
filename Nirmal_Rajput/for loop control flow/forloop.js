let a = [5,10,15,20,25,30,35,40,45,50];

for(let index = 0;index < a.length; index++){
    if(a[index] != 30){
        if([index] == a.length-1){
            console.log("num is not found");
            break;
        }
        continue;
    }

console.log(index)
break;

}