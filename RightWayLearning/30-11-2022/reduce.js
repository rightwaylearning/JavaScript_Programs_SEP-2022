let sale =[
    {
        name:'A',
        list:[
            { item:'sugar',Quntity:2,rate:38},
            { item:'oil', Quntity:3,rate:135}
            ],  
    },
    {
        name:'B',
        list:[
            { item:'rice',Quntity:4,rate:55},
            { item:'notebooks', Quntity:3, rate:40}
            ],  
    }
]

let todaysSale = [];

sale.map(function(cust){
    // let total = 0;
    //  for(let i =0 ;i < cust.list.length ; i++){
    //     total = total + (cust.list[i].Quntity * cust.list[i].rate);
    //  }
     let total = cust.list.reduce(function(sum,item){
        return sum + item.Quntity * item.rate;
     },0);

     todaysSale.push({
        name:cust.name,
        bill:total
     });
});





// for(let i =0 ;i <sale.length ; i++){
//     let total = 0;
//      for(let j = 0 ; j < sale[i].list.length ; j++){
//         total = total + (sale[i].list[j].Quntity * sale[i].list[j].rate);
//      }
//      todaysSale.push(
//         {
//             name:sale[i].name,
//             bill:total
//         }
//     );

// }
 console.log(todaysSale);


//  let data = [12,34,56,78,78];



//  let res = data.reduce(function (sum,elem){
//     return sum + elem;
//  },0);

//  console.log(res);






