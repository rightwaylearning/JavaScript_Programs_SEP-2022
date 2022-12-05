let arr = [
    {
        name:'A', age:32, gender:'M'
    },
    {
        name:'B', age:31,gender:'M'
    },
      {
        name:'C', age:33, gender:'F'
    },
      {
        name:'D', age:34, gender:'M'
    }
]

let data = {male:0,female:0};


arr.map(function(obj){
   if(obj.gender == 'M'){
        let cnt = data.male;
        cnt++;
        data.male = cnt;
       
   }else{
        let cnt = data.female;
        cnt++;
        data.female = cnt;
   }
});

console.log(data);











