function doAdd(){

    let sum=0;

    for(let i=0;i<arguments.length;i++){
        
        sum = sum+arguments[i];

    }

        console.log(sum);

}

doAdd(20,30);

doAdd(50,60,40);

doAdd(100,200,300,400,500);