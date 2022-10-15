
let obj = {}; 

function Match(score,over){
    this.score = score;
    this.over = over;
}

let match1 = new Match(132,12.4);
console.log(match1);

class IPL{
    constructor(score,over){
        this.score = score;
        this.over = over;
    }
}

let match2 = new IPL(45,4.4);
console.log(match2);


let m1 = {};
let m2 = Object.create(m1);