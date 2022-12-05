
let obj = {
    a:200,
    b:100,
    doOpt:(x,y) =>{
        console.log(arguments);
        console.log(this.a + this.b);
    } 
}

obj.doOpt(10,20);