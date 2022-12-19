console.log("Billing of Grocerry Shop");

let borrow=
[
    {
        name:"sarthak",
        list:
        [
            {menu:"rice",quantity:3,price:40},
            { menu:"oil",quantity:2,price:130}
        ]
    },
    {
        name:"Sangram",
        list:
        [
           {menu:"wheet",quantity:3,price:80},
           { menu:"oil",quantity:3,price:130}
        ]
    }
]

let showsale=[];

borrow.filter((obj)=>{
    //first filter out one object one by one by call back functions
   let tot_bill= obj.list.reduce((sum,ele)=>{ //performing ops on array list to calculate the total and it is always returning value
      sum=sum+(ele.quantity*ele.price);
      return sum;
    },0)
    showsale.push({
        name:obj.name,
        Total: tot_bill
    })
})

console.log(showsale);