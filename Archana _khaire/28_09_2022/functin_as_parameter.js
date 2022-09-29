function s(){
    return function(){
        console.log("Good night");
    };
    let f =s();
    f();
    console.log("<<<<<<<<<<<<");
    function test(a){
        console.log(a);

    }
    test(21);
    console.log(">>>>>>");
    function foo(a){
        return a;

    }
    function foo(a){
        return a;
    }
    let you = foo(
        function (){
           console.log("Good"); 
        }
        

    
    );
    
        you();
        console.log(">>>>>>>>>>>");
        (function ss (){
            console.log("Hello");

        })();

       

        console.log(">>>>>>>>>");
        function run(){
            return function(){
                console.log("test hello");
    
           
        };
    } 
    
} 
function run(){
    return function(){
        console.log("hello run");
    };
}
run()(); 
    
   
    

