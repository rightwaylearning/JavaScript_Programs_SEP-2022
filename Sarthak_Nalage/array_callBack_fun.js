console.log("Some of the common call back functio are use to perform ops on array rather than use of vintage for loop functions are map(),reduce(),filter()");

//map() function call
let ary1=[1,2,3,4,5];
let ary2= ary1.map((ele,index,arr)=>{
    console.log(index+" "+ele);
   return ele+10;
})
console.log(ary2);

//filter
//suppose you want to return only those which are even
let even_arr= ary2.filter((ele)=> ele%2==0)
console.log(even_arr);

//if you want to reduce the result in single element like adding all the element of array
//reduce comes in picture
let getadd= even_arr.reduce((sum,ele)=>sum=sum+ele,0);
console.log(getadd);