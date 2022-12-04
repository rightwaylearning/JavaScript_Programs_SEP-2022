
let obj = {
    fisrtName:'Rajiv',
    lastName:'bhatiya',

    fullName:function(message){
        console.log(message);
        console.log(this.fisrtName+' - '+this.lastName);
    }
}

obj.fullName('I am actual root owner of this obejct');

let friend = {
    fisrtName:'Sagar',
    lastName:'Chaudhari'
}

// function borrowing 
obj.fullName.call(friend,"Hi hello can u please help me.");
obj.fullName.apply(friend,["Hi hello can u please help me."]);

//-----------------------------------------
function testMe(a,b){
    console.log(this.message);
    console.log(a + b);
}

let obj1 = {message:"HI hello"}

testMe.call(obj1, 10,20);


let obj2 = {
    message:"Sorry boss, next time onwards I will take care"
}

testMe.call(obj2,34,67);




testMe.apply(obj1, [10,20]);