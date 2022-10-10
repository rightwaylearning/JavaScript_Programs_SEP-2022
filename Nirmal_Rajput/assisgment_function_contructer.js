function createmployee(fname,lname){
    this.fname = fname;
    this.lname = lname;
    this.fullName = function(){
        return this.fname + " " + this.lname
    }
}

let obj = new createmployee("nirmal","rajput");
console.log(obj.fullName());

let ob1 = new createmployee("jaypal","ambika")
console.log(ob1.fullName());

let ob2 = new createmployee("aarav","shital");
console.log(ob2.fullName());


function creatname(fname,lname){

    this.a = fname;
    this.b = lname;
    this.fullName = function(){
        return this.a + " "+ this.b;
    }
}

let obj2 = new creatname("divya","rajput");
console.log(obj2.fullName());

let obj3 = new creatname("nirmal","divya");
console.log(obj3.fullName());

let ob4 = new creatname("rekha","jitendra");
console.log(ob4.fullName());
