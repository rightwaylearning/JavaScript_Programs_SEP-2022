function sum(){
    //console.log(arguments);// argument object.
    

    let sum = 0;
    for(i = 0; i< arguments.length; i++){
        sum = sum + arguments[i];
    }
    console.log(sum);
}

sum(10);

sum(10,3,4,5,6,7,8);
sum(10,20,30,40,50);