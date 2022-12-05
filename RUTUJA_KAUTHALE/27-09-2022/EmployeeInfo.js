let CompanyInfoDetails={
    companyname:"cogizant ",
    companyaddress:{
        line_1:"Shirur",
        line_2:"Pune",
        pincode:413702
    },
   rank:3,
    companyCO:"Mr. Kauthale"
}


let Employee=[{
    name:"rutuja",
    Emp_id:10,
    address:{
        line_1:"at post deodaithan",
        line_2:"kukadi colony",
        line_3:"shrigonda Ahmednagar",
        pincode:413702
    },
  phonenumber :[9850615317,2030405060,9637961728],
    companyDetails:CompanyInfoDetails,
},{
    name:"Athrav",
    Emp_id:2,
    address:{
        line_1:"at post deodaithan",
        line_2:"kukadi colony",
        line_3:"shrigonda Ahmednagar",
        pincode:413702
    },
    phonenumber :[9850615317,2030405060,9637961728],
    companyDetails:CompanyInfoDetails,
},
{
    name:"Athrav",
    Emp_id:2,
    address:{
        line_1:"at post deodaithan",
        line_2:"kukadi colony",
        line_3:"shrigonda Ahmednagar",
        pincode:413702
    },
    phonenumber :[9850615317,2030405060,9637961728],
    companyDetails:CompanyInfoDetails,
}];

let index=0;
while(index<Employee.length)
{
   console.log(index+1 +" Employee Info");
   console.log(" ");
    console.log("Employee Name : "+Employee[index].name);
    console.log("Employee id :  "+Employee[index].Emp_id);
    console.log("Employee adress : "+Employee[index].address.line_1+" "+Employee[index].address.line_2+" "+Employee[index].address.line_3+" "+Employee[index].address.pincode);
    
      let i=0;
    console.log("Employee phone number ");
    while(i<Employee[index].phonenumber.length){
        console.log(Employee[index].phonenumber[i]);
        i++;
    }
    console.log("Employee Company Details");
    console.log("Company name : " +CompanyInfoDetails.companyname);
    console.log("Company adress : " +CompanyInfoDetails.companyaddress.line_1+" "+CompanyInfoDetails.companyaddress.line_2+" "+CompanyInfoDetails.companyaddress.pincode);
    console.log("Company rank : " +CompanyInfoDetails.rank);
    console.log("Company headmaster : " +CompanyInfoDetails.companyCO);
    console.log(" ");
    index++;
}