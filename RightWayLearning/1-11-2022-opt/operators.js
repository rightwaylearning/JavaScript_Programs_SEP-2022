// arithmatic opt (+,-,*,/)
// +
/*
 number
 string
 boolean
 udefined
 null
 object
 symbol
 bigInt
*/

// + 
let a = 10; let b = 20;
let sum = a + b;
console.log(sum); // 30
'//OR'

let sum1 = 10 + 20;
console.log(sum1); // 30

//---------------------------------

let s1 = 'ki';
let s2 ='ran';

let sum2 = s1 + s2;
console.log(sum2); // kiran


let sum3 = 'ki'+'ran';
console.log(sum3);


//----------------------------------
let sum_1 = 10+ 20 ; // 30
console.log(sum_1)
let sum_2 = 'Hi' + 'key'; // 'Hikey'
console.log(sum_2)
let sum4 = 10 + '10'; // '1010'
console.log(sum4)
let sum5 = '20' + 12; // '2012'
console.log(sum5)
let sum6 =  10 + 20 + 30 + '20';
      // =  30 + 30 + '20';
    //   = 60 + '20';
    // = '6020'

    console.log(sum6)
let sum7 = '10'+20+30+40;
        // = '1020' + 30 + 40
        // = '102030' + 40
        // = '10203040';
        console.log(sum7)

// rule 
// 1] always start to do operation from letft to right
// 2] 


let sum8 = 1 + 2+ 3 + '' + 4 + 5;
      // = 3 + 3 + '' + 4 + 5;
      // = 6 + '' + 4 + 5;
    // = '6' + 4 + 5;
    //  = '64' + 5
      // = '645';
console.log(sum8)

// boolean    true = 1, false  = 0
// null       null = 0
// undefined  = NaN (not a number)

console.log(10+true);
console.log(10-false-null-true);
console.log(true + true);
console.log(1+undefined);
console.log(10+null+true-true);

console.log('301'+true);  // '301true'; // '3011'
console.log(true+true+true+''+true+true +false); '3truetruefalse'
       // = '3truetruetruefalse'
console.log(10+undefined); //NaN
console.log('10'+ undefined);   '10unedfined'      





//object


















