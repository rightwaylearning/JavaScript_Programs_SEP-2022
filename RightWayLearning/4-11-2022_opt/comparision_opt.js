// < , > , >=, <= , ==, !=

let a = 10 > 5;
console.log(a);

console.log(true > false); // true
console.log(false == false) // true
console.log(0 == false);// true
console.log(1 >= true);// true
console.log('10' > 5); //  true

console.log(null >= false); // true

console.log(undefined >= 0);//  false
console.log(undefined == 0); //  true

console.log('abc' < 'afc'); //

console.log('a' > '10');  //  

console.log(true >= true + 1); // false


// diff between  == &&  ===

console.log(10 == '10');  // true

console.log(10 === '10');  // false

/*
 normal
 == here data type may be diff , still he is comparing
 === here data type is diff it will not work

 // 
  ==   he is converting left side value in to right side value type & then comp
  ===  he is just checking data type is same then only comp otherwise return false;
 */



















