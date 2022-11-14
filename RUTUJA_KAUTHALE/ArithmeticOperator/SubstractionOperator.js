console.log("Substraction Operator");


let sub;

sub=10-9;
console.log(sub);//1

sub= "10A"- 3;
console.log(sub);//NAN

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

sub= -50+96;
console.log(sub);

sub=-96+50;
console.log(sub);


