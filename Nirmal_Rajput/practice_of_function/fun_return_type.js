function sum(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    console.log(sum);
}
sum(23,73,82,98,90,87);



function minus(){
    let minus = 0;;
    for(let j = 0; j<arguments.length; j++){
         minus = minus - arguments[j];

    }
    console.log(minus);
}
minus(23,34,56,87,55,45);


function multi(){
    let multi = 0;
    for(let l = 0; l<arguments.length; l++){
        multi = multi + arguments[l];
    }
    console.log(multi);
}
multi(45,86,86,84,7);