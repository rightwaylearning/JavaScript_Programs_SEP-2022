//The while loop has the following syntax:

/*
while (condition) {
    // code
    // so-called "loop body"
  }
*/

//   =====================================================================

// While the condition is truthy, the code from the loop body is executed.

let i = 0;
while (i < 3) {          // shows 0, then 1, then 2
    console.log(i);        // print value after condition is truthy 
    i++;                   // increment 
    //i = i +1             // same as => i++;
}

// Output: 
// 0
// 1
// 2 
//   =====================================================================  



let j = 3;
while (j) {              // when i becomes 0, the condition becomes falsy, and the loop stops
    console.log(j);      // print value,  while j!= 0)
    j--;
}

// Output: 
// 3
// 2
// 1 
//   =====================================================================  
