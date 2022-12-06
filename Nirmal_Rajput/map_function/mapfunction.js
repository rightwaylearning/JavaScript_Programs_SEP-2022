
let Student = [
    {
        name:"nirmal" , rollno:15 , gender:"male"
    },
    {
        name:"Divya" , rollno:16 , gender:"female"
    },
    {
        name:"sejal" , rollno:17 , gender:"male"
    },
    {
        name:"shital" , rollno:18 , gender:"female"
    },
    {
        name:"aarav" , rollno:19 , gender:"male"      

    }
];

let data = {male: 0 , female:0 };

Student.map( function (obj)  {
    if(obj.gender == "male"){

        let count = data.male //let a = b, a++ , b=a;
        count++
        data.male = count;

    }else{
        let count = data.female
        count++
        data.female = count;
    }
})
console.log(data)
