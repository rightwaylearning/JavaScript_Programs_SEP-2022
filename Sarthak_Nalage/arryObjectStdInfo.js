console.log("<<<<<<<<<Getting Student information>>>>>>>");
let studentInfo=
[{bsc_info:{name:"Sarthak Nalage",year:"TE",dept:"IT",p_no:[9403073066,9881601399],GFM:"Vandana Dixit"},
                Address:{city:"Nagar",landmark:"near CBI Kolgaon branch",pinCode:413728},grade:8.82,bloodgrp:"AB+"},
{
    bsc_info:{name:"Ruturaj Nalage",year:"TE",dept:"BCA",p_no:[9921757571,9881601399,123525254],GFM:"Sudarshan Amrute"},
                Address:{city:"jodhpur",landmark:"jjg Hotel",pinCode:125356},grade:8.82,bloodgrp:"A+"
}]

console.log(">>>printing Student info<<<<<<");
let s=0;
while(s<studentInfo.length){
    console.log("**Printing ",s,"student info**");
    console.log(studentInfo[s].bsc_info.name);console.log(studentInfo[s].bsc_info.year);console.log(studentInfo[s].bsc_info.dept);console.log(studentInfo[s].bsc_info.GFM);
    console.log(studentInfo[s].Address.city);console.log(studentInfo[s].Address.landmark);console.log(studentInfo[s].Address.pinCode);
    console.log(studentInfo[s].grade);    console.log(studentInfo[s].bloodgrp);
    let temp=0;
    while(temp<studentInfo[s].bsc_info.p_no.length){
        console.log(studentInfo[s].bsc_info.p_no[temp]);
        temp++;
    }
    s++;
}