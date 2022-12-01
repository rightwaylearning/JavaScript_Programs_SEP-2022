let arr = [1,2,3,4,5,6,7];

// key point : in map , original array & out put array size should same
let newArr = arr.map(function test(elm){
    return elm*2;
});

console.log(newArr);

//------------------------------------------

let arr1 = arr.filter(function(e){
   return e % 2 == 1;
})

console.log(arr1);

