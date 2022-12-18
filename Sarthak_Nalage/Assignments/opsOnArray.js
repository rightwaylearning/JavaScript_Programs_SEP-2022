console.log("Performing real time ops on Array");
let original=['red','green','blue','red','red','green','blue','red'];
let obj={};
original.filter((ele)=>{
    if(obj[ele]){
        let temp=obj[ele];
        temp++;
        obj[ele]=temp;
    }else{
        obj[ele]=1;
    }
})
console.log(obj);