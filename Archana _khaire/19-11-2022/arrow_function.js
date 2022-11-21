function addition(a,b, add){
    let s = add(a,b);
    console.log(s);
}

addition(200,300,(p,q) =>p+q);


function multiplication(x,y,multi){
    let s1 = multi(x,y);
    console.log(s1);
}

multiplication(25,10,(r,t) =>r*t);