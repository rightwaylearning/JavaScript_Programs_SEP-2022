//let color= ['pink','red','blue','pink','red','blue','pink'];
//count pink color

// let color =[{
//     pink:3
// },
// {
//     red:2
// },
// {
//     blue:2
// }];

// let output = color.filter((ele)=>{
//     if(ele.pink>=3){
//         return ele;
//     }
// });
// console.log(output);


let arr = [
    {
        name: 'A',
        age: 32,
        gend: 'M'
    },
    {
        name: 'B',
        age: 31,
        gend: 'M'
    },
    {
        name: 'C',
        age: 33,
        gend: 'F'
    },
    {
        name: 'D',
        age: 34,
        gend: 'M'
    },



]

let result = arr.filter((elem) => {
    if (elem.gend == 'F') {
        return elem;
    }
    // let data = {male:0,female:0};
    console.log(result);