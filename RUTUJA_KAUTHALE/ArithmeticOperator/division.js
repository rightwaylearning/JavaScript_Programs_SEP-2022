console.log("division");
let div;

div= 10/3;
console.log(div);//3.33

div= -20/30;
console.log(div);//-0.6

div =-30 /(-40);
console.log(div);//0.75

div = 30/0;
console.log(div); //infinity

div = 30/true;
console.log(div); //30

div = 40/'true';
console.log(div);//NaN

div = 10/false;
console.log(div);//infinity

div = 10/null;
console.log(div);//infinity


div = '10'/ 4;
console.log(div);//2.5

div= undefined/undefined;
console.log(div);  //NaN

div ="str"/"str";
console.log(div);  //NaN

