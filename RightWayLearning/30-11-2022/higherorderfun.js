
// map filter reduce  >>> array (object)
let arr = ['red','pink','red','yellow','red','pink'];

let arr1 = {};
arr.map((color)=>{

    if(arr1[color]){

        let v = arr1[color];
        v++;
        arr1[color] = v;

    }else{
        arr1[color] = 1;
    }

});
console.log(arr1);