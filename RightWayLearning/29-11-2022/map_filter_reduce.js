let arr = [1,2,3,4,5,6];

// using loop
// for(let i =0 ; i< arr.length ; i++){
//     arr[i] = arr[i] + 5;
// }
// console.log(arr);

  let new_array= arr.map(function(elm){
             // console.log(index +" >> "+elm +"  "+array);
              return elm + 20;
  });
  console.log(new_array);

  let new_array1 = arr.map((elm)=>elm + 100);
  console.log(new_array1);
