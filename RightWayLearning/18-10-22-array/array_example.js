let arr = ['AA','BB','CC','DD'];
// intenally
let arr1 = {
    '0':'A',
    '1':'B',
    '2':'C',
    '3':'D',
    length:4
}

console.log(arr1['0']);
console.log(arr['0']);

arr1.length = 100;
console.log(arr1.length);

console.log(arr.length);// 4
arr.length = 1000;
console.log(arr.length);