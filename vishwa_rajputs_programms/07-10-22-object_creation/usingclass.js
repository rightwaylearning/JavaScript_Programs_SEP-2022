

//using class

class employee{

 constructor(fName,lName){

this.fName=fName;
this.lName=lName;


 }

}
//let ob = new employee("brian","weiss");
let ob1= {fName:"jennifer",lName:"winget"};
console.log(ob1);


// function

function Match(score,over){

  this.score=score;
  this.over=over;
}
let match = new Match("put value, u want");
console.log(match);