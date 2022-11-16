let obj ={

    firstName:'omkar',
    lastname:'pacharne',

    fullName:function(message){
      console.log(message);
      console.log (this.firstName + ' ' + this.lastname);
    }
}
obj .fullName ('I am a omkar');



let friend = {
    firstName:'rashmi',
    lastName :'pratima',

}
obj.fullName.call(friend,"hiii hello");




function testMe ( x,y){
    console.log (this.message);
    console.log( x+y);

}

let obj1 = {message:"hii hello"}

testMe.call(obj1,25,34);

let  obj2 ={message:'sorry '};
testMe.call(obj2,36,45);







