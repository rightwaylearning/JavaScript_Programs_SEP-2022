



function test(){
    console.log(this.message)
    }

    let m ={ message:"gud morning"}

      let copySameMethod = test.bind(m);
       copySameMethod();                        




     // 16-11/ 43.35
    //console.log(copySameMethod); // f()
    //console.log(test); // whole body will print

    

        