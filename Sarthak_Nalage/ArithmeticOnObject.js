console.log("####Aritmetic Operatorations on Object data type######")
let obj1={
    valueOf: function(){
        return "10";
    }
}
console.log(10+obj1);

let obj2={
    valueOf: function name(){
        return "10";
    }
}
console.log(10-obj2);

let obj3={
    toString :function(){
        return 10;
    }
}
console.log(30+obj3);

let obj4={
    toString :function(){
        return "sarthak";
    }
}
console.log(10+obj4);

let obj5={
    toString :function(){
        return 20;
    },
    valueOf : function name(){
        return 20;
    }
}
console.log(obj5.toString+20);
console.log(obj5.valueOf+20);

