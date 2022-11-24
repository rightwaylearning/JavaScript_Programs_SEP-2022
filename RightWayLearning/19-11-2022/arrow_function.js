


function operation(a,b,opt){
  let s =  opt(a, b);
  console.log(s);
}


operation(100,200,(x,y) =>x+y);


// 2 error 
// inside arrow functin we cant use this, arguments