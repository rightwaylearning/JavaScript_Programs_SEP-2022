

let obj ={
    a : 100,
    b : 200,
     doOpt:(x,y)=>{
        console.log(arguments)
        console.log(this.a + this.b);
    }
  
}

obj.doOpt(1,2);
