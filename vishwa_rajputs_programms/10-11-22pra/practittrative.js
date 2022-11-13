
console.log("111111111111111111111111111111111111111111111111111111111111111111111111");

let r = 1;
while(r <= 10){
    if(r%2==1){
    // console.log(r);
}
else{
console.log(r);
// r++;
}
  r++;
}
// the above ans will get evn num 2 4 6 10............
console.log("||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");
let n = 1;
while(n <= 10){
    if(n%2==1){

      n++;
  }
console.log(n);
n++;
} // even
console.log("|0000000000000000000000000000000000000000000000000000000000000000000000000|");

let q = 1;

while(q <= 10){
    if(q%2==0){

      q++;
     continue;    
}
console.log(q);
q++;
} // odd 

console.log("---------------------------------------------------------------")
// can find mode of  by changing value 
let w =3;

while(w<=3){
console.log(w%2);
w++;
}
console.log("__________________________________________________________________________________")
// find arry idx
let arry=[10,20,30,40,50,60,70,80,90,100];
let i = 0;
while(i<=arry[i]){
  console.log(i);
   i++;
 
  }
  console.log("__________________________________________________________________________________")
// find arry lngth
  let array=[10,20,30,40,50,60,70,80,90,100];
  let idx = 1;
  while(idx<=array.length){
    console.log(idx);
     idx++;
   
    }
// find value or if not 
    let arr=[10,20,30,40,50,60,70,80,90,100];
let k = 0;
while(k<arr.length){
if(arr[k]!=60){
                                                         console.log("num is not found");
                                                         break;
//   k++;
//  continue;
  }
// console.log(arr[k]);
// k++;
}
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
let arrr=[10,20,30,40,50,60,70,80,90,100];// if i del this 60 or wnt to fnd sm othr num
let l = 0;
while(l<arr.length){
if(arr[l]!=60){
if(l==arr.length-1){
console.log("num not fnd");
  break;
}
l++;
continue;

  }
console.log("60 num in indx " + l);
//l++;
break;
}

































