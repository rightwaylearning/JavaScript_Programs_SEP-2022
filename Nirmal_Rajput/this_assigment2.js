
function printfullname(){
    return  this.firstname +" "+ this.lastname;
}

let i = {
    firstname:"jitendrasing",
    lastname:"rajput"
}
i.Too = printfullname;

console.log(i.Too());


let m = {
    firstname:"jaypal",
    lastname:"rajput"
}
m.moo = printfullname;

console.log(m.moo());


let n = {
    firstname:"kunal",
    lastname:"rajput"
}
n.noo = printfullname;

console.log(n.noo());