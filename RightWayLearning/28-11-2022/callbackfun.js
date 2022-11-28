

function main(data){
    console.log("I am first line")
    setTimeout(function test(){
        console.log("I am second line")
    },10000);
    console.log("I am last line")
}

main(100);