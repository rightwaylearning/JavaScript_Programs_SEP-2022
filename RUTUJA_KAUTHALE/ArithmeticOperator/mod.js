console.log("Mode And Reminder");


let rem;

rem= 10%3;
console.log(rem);  //1

rem= 9%3;
console.log(rem); //0

rem= -10%3;
console.log(rem); //-1

rem=-10% (-3);
console.log(rem);  //-1


rem=-10% (-30);
console.log(rem);  //-10


rem=10% (-30);
console.log(rem);  //10


rem= 10% (-3);
console.log(rem); //1


rem= 10% null;
console.log(rem); // NaN

rem= 10%undefined;
console.log(rem);  //NaN

rem= undefined%10;
console.log(rem); //NaN

rem= true% true;
console.log(rem); //0

rem = 'true'% 'true';  //NaN
console.log(rem);


rem= 10 % 0;
console.log(rem);  //NaN





//let m=math.mod(10,2);
//console.log(m);