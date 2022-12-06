
function getCustData(){

    let p = new Promise(function(resolve,reject){
                let userList = [];
                setTimeout(()=>{
                userList =  [
                    {cutNo:123,custname:'A'},
                    {cutNo:345,custname:'B'},
                    {cutNo:789,custname:'C'}
                ];
                },2000);
                return userList;
    });

     return p;
}

function searchCust(cust_number){

     let p = getCustData();

    //  for(let i =0 ;i < list.length; i++){
    //     if(list[i].cutNo === cust_number){
    //         return list[i];
    //     }
    //  }

   let data = p.then(function(list){
        // let result =  list.find(function(customer){
        //     return  customer.cutNo == cust_number
        //  });
        // return result;
        console.log(list);
    });
 
    return data;
  

  //  return list.find((customer)=>customer.cutNo == cust_number);


}

let result = searchCust(123);
console.log(result);





















