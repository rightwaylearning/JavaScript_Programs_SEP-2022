

//object literal

let human= {}; 


human.firstname="Kiran";
human.lastname="Landge";

function fun(msg){

    console.log(msg);
}

human.message = fun;
console.log(human);


let cmd ={

// fname:"Kiran",
// lname:"Landge",
FullName:function(fname,lname){
    //return fname + lname;
    console.log(fname); //this. 
    console.log(lname); //this.
}

}
 cmd.FullName("KIRAN","LANDGE");

 let lmn ={

    fname:"Krishna",
    lname:"Landge",
    FullName:function(){

     let fname="Yuvraj"
     let lname="Jogdand"  
        //return fname + lname;
        console.log(this.fname);
        console.log(this.lname);
        console.log(fname); // let fname
        console.log(lname); //let lname
        //this.fname=fname;
        //this.lname=lname;
    }
    
    }
     lmn.FullName();//("Chemate","Pankaj");
    

