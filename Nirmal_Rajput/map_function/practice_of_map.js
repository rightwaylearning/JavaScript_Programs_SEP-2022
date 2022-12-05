let Employee = [
    {
        name:"Nirmal", company:"infosys", id:123
    },
    {
        name:"Divya", company:"infosys", id:1243
    },
    {
        name:"seju", company:"tcs", id:1245
    },
    {
        name:"shital", company:"cisco", id:1233
    },
    {
        name:"vishva", company:"infosys", id:1233
    },
    {
        name:"kuldip", company:"tcs", id:123759
    },
];


let data = {infosys:0,tcs:0}

Employee.map(function (obj) {

if(obj.company == "infosys"){

    let a = data.infosys
    a++;//2
    data.infosys = a;//2

}else{
      let b = data.tcs
      b++;
      data.tcs = b;

}
})
console.log(data);

