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
