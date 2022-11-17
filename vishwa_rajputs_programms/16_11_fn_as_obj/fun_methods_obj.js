
let ob ={

    fisrtName:"vishwa",
    lastName:"raj",
   
    fullName:function(message){
        console.log(message)
        console.log(this.fisrtName+'  '+this.lastName);
        
        }
}

ob.fullName("i am a first");

let bro ={

    fisrtName:"nirmal",
    lastName:"raj"
    
}

ob.fullName.call(bro,"i am a second");
ob.fullName.apply(bro,["i am a second"]);

//_____________________________________________________

 function test(a,b){
    console.log(this.firstname)
    console.log(a+b);
    
    }

    let m ={ firstname:"vishwa"}
  
    test.call(m,10,20);
    test.apply(m,[30,30]);

    let n ={ firstname:"nirmal"}
    test.call(n,20,30);














