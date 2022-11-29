
let arr = [11,12,23,45,67,88,80];

// map >> I am returning same size array , I am doing operation on each elemnet
// filte I am filtering elem & return filtered elemnt

let arr1 = [];
for(let i =0 ; i <arr.length ; i++){
    if(arr[i]%2 ==0){
        arr1.push(arr[i]);
    }
}
//console.log(arr1);

let new_array = arr.filter(function(elm,index,array){
    if(elm % 2 == 0) {
     return  elm;
    }
});

console.log(new_array);

// smart code
let new_array1 = arr.filter((elm) =>{
    if(elm % 2 == 0) return  elm;
});
