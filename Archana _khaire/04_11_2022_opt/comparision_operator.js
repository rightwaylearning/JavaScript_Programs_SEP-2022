// >,  <,  >=,  <=,  == , !=

let s = 20 > 10;
console.log(s); // true

console.log(true > false); // true
console.log(false >= true); //false

console.log('21'== 21); // true
console.log(null >= false);
console.log(undefined >= 0);// false

console.log('sad'== 'cds');//false
console.log('ase'<= 'arh');// false

console.log('acs'< '20');
console.log('a'> '10');//true
console.log(true >= true +1);// false



// opt == and ===

console.log(20=='20'); // true
console.log(20==='20');
  


/*normal
 == here data type may be diff , still he is comparing
 === here data type is diff it will not work

 // 
  ==   he is converting left side value in to right side value type & then comp
  ===  he is just checking data type is same then only comp otherwise return false;
 */

