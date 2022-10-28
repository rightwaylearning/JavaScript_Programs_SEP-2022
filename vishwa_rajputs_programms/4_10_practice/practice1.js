

//object literal

let person = {}; 


person.firstname="vishwa";
person.lastname="Rajput";

function fun(msg){

    console.log(msg);
}

person.message = fun;
console.log(person);


let abc ={

//fname:"vishwa",
//lname:"Rajput",
FullName:function(fname,lname){
    //return fname + lname;
    console.log(fname); //this.
    console.log(lname); //this.
}

}
 abc.FullName("VISHWA","RAJPUT");

 let obj ={

    fname:"kuldip",
    lname:"Rajput",
    FullName:function(){

     let fname="nirmal"
     let lname="rajput"  
        //return fname + lname;
        console.log(this.fname);
        console.log(this.lname);
        console.log(fname); // let fname
        console.log(lname); //let lname
        //this.fname=fname;
        //this.lname=lname;
    }
    
    }
     obj.FullName();//("rajput","premjit");
    

