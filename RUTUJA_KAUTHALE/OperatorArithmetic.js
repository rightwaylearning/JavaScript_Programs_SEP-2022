let s1=10+ 20;
console.log(s1);  //30

s1= '10'+20;
console.log(s1); //'1020'

s1= 20+ 30 + '20';
console.log(s1);  '5020'

s1= 34+ 'A';
console.log(s1); //'34A'
 

s1= 10+ 20+ 30-40 + "A"+ 40;
console.log(s1);  //20A40

s1= 70- 45+ ''+50+60;
console.log(s1);   //255060

console.log('**************************************************');
//Datatype
//boolean    true= 1, false =0
// null    null=0;
//undefined   Undefined= NaN  (Not a value)

s1=10-true-false-null;
console.log(s1);  //9

s1 = true+ true;
console.log(s1); //2

s1= 1+undefined;
console.log(s1); //NAN

s1=10+undefined+null+true; //NAN
console.log(s1);

s1= 10+null+true-true;
console.log(s1);  //10


s1=10+20+'1'+true;
console.log(s1); //301true

s1= true+true+true+'1'+true+true+false;
console.log(s1);  //31truetruefalse


s1=10+undefined;
console.log(s1);  //NAN

s1='10'+undefined;
console.log(s1);  //10undefined



console.log("Substraction Operator");


let sub;

sub=10-9;
console.log(sub);//1

sub= "10"- 3;
console.log(sub);//7

sub= '40'-'20';
console.log(sub); //20

sub ='40'- 'rutuja';
console.log(sub);// NaN

sub ='A'-'10';
console.log(sub); //NaN

sub =true-1;
console.log(sub); //0

sub ='true'- 0;
console.log(sub); //NaN

sub= true-false-null;
console.log(sub); //1

sub= true+false-undefined;
console.log(sub);  //NaN

sub= 40-'undefined';
console.log(sub);  //NaN

sub= -50-96;
console.log(sub); //-149

sub= 96-(-50)
console.log(sub); //149

sub = 50-96;
console.log(sub); //-46



console.log("Multiplication");

let multi;

multi = 10*3;
console.log(multi);//30

multi= -20* 30;
console.log(multi);//-600

multi =-30 *(-40);
console.log(multi);//1200

multi = 30*0;
console.log(multi); //0

multi = 30*true;
console.log(multi); //30

multi = 40*'true';
console.log(multi);//NaN

multi = 10* false;
console.log(multi);//0

multi = 10*null;
console.log(multi);//0


multi = '10'* 4;
console.log(multi);//40console.log("Multiplication");


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





let m=math.mod(10,2);
console.log(m);