/*
 number
 string
 boolean
 undefined
 null
    -- symbol
 bigint
 object
*/

let obj = {
    valueOf:function(){
        return 10;
    }
}

console.log(30 + obj);// 40

console.log('30' + obj);// '3010'

// if inside object there is no valueOf method present, in that case 
// js engine serach toString function

let obj1 = {
     toString:function(){
        return true;
     }
}

console.log(11 + obj1);// 12


let obj2 = {
    valueOf:function(){
        return 10;
    },
    toString:function(){
        return 20;
    }
}
// first engine serach valueOf function if not then toString
console.log(100 + obj2); // 110



let obj3 = {
    hi:function(){
        return 67;
    }
}
console.log(10 + obj3);  // 10[object Object]








