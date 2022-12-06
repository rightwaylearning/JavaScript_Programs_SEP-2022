let arr=['red','pink','red','yellow','red','pink'];

let arr1={'red':2,'pink':1};
arr.filter((color)=>{
    if(arr1[color]){
        let v= arr1[color];
        v++;
        arr1[color]=v;

    }
    else{
        arr1[color]=1;
    }
});
