let n = {
firstname:"nirmal",
lastname:"rajput",

Fullname:function(){
let m = "divya";
let o = "rajput";

console.log(this.firstname);
console.log(this.lastname);
console.log(m);
console.log(o);

}

}
n.Fullname();