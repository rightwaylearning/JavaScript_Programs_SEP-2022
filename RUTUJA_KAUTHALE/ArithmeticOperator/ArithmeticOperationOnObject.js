let obj={

    function()
    {
        return 10;
    }
}

console.log(10+obj);  //10[object object]

console.log("---------------------------------------------------------------------------");

let obj1={

    valueOf:function()  //valueOf not a valueof 
    {                           //if we write valueof it will treat a function as a normal.
                                // give the answer 10[object object]
        return 10;
    }
}

console.log(10+obj1);  //20

console.log("---------------------------------------------------------------------------");

let obj2={
    valueOf:function(){
        return null;
    }
}
    console.log(10- obj2); //10

    console.log("---------------------------------------------------------------------------");

    let obj3={
        valueOf:function(){
            return undefined;
        }
    }
        console.log(10- obj3); //NaN
      
console.log("---------------------------------------------------------------------------");

        let obj4={
        toString:function(){
                         return 10;
                             },
        valueOf:function(){
                             return 40;
                                 }
}
    console.log(90- obj4); //50  //priority goes to valueOf method.

console.log("---------------------------------------------------------------------------");

    let obj5={
        toString:function(){
            return 10;
        }
    }
        console.log(50- obj5); //40
console.log("---------------------------------------------------------------------------");

        let obj6={
            valueOf:function(){
                return 10;  // priority goes to fist valueOf method.
            },
            valueOf:function(){
                return 40;
            }
        }
        console.log(50- obj6); //40
 console.log("---------------------------------------------------------------------------");

        let obj7={ };
        console.log(50- obj7); // NaN
console.log("---------------------------------------------------------------------------");

        let obj8={
            valueOf:function(){
                return true;
            }
        }
            console.log(10- obj8); //9
          
console.log("---------------------------------------------------------------------------");


let obj9={
    valueOf:function(){
        return 'true';
    }
}
    console.log(10- obj9); //NaN    
  
console.log("---------------------------------------------------------------------------");


let obj10={
    valueOf:function(){
        return '10';
    }
}
    console.log(10- obj10); //0
  
console.log("---------------------------------------------------------------------------");

