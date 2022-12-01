function test(){
    console.log("Collection of Amount is ...... Shop 1");
    console.log("Collection of Amount is ..... Shop 2");
    setTimeout(()=> console.log("Collection of Amount is....... Shop 4"),10000);
    console.log("Collection of Amount is ....... Shop 4")
}

test();