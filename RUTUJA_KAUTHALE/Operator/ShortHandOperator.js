let n=100;

n += 10;

console.log(n); //110

n -=10;
console.log(n); //100

n *=10;
console.log(n); //1000

n /= 10;
console.log(n); //100

n += 1;
console.log(n); //101

n%=10;
console.log(n); //1


n += true;
console.log(n); //2

n -=false;
console.log(n); //2-0=2

n *=null;
console.log(n); //2*0=0

n /= null;
console.log(n); //0/0=NaN

n += undefined;
console.log(n); // NaN


n=100;
n%=true;
console.log(n); // 0

n+=undefined;
console.log(n); //NaN

n=10;
n /=null;
console.log(n);   //infinity

n=false;
n *= true;
console.log(n);//0
