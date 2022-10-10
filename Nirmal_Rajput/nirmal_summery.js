function Student(stud1,stud2){
this.s = stud1;
this.j = stud2;
this.fullname = function(){
    return this.s + " " +this.j;
}
}

let m = new Student("prashant rajput","kuldiprajput");
console.log(m.fullname());

console.log("--------------------------------------------------");

class employee {
    constructor(firstname,lastname,id){
        this.f = firstname;
        this.l = lastname;
        this.d = id;
    }
}

let h = new employee ("nirmalsing","rajput",23);
console.log(h);

