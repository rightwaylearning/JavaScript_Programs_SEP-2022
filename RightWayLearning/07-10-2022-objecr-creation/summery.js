
// first way 
let obj = {}; // using literal const

// second way
function Match(score,over){
    this.score = score;
    this.over = over;
}

let match1 = new Match(234,19.2);
console.log(match1);

// ES6 using class
class IPL{
    constructor(score,over){
        this.score = score;
        this.over = over;
    }
}

let match2 = new IPL(124,19.2);
console.log(match2);

// using Object object , crwate function

let m1 = {};
let m2 = Object.create(m1);


