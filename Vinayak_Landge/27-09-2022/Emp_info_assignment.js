let Empinfo=[{
    empname:"Amol",
    empid:414658,
    empphone:[8988225487,9852428254],
    company:{
        cname:"TCS",
        cregistrationn_no:55425852,
        address:{
            line1:"14/2,Sai complex",
            line2:"MG Road",
            landmark:"Swastik Chauk",
            city:"Ahmednagar"
        }

    }
},

{
    empname:"Sudesh",
    empid:4582487,
    empphone:[9536550257,7892242282],
    company:{
        cname:"TechM",
        cregistrationn_no:75258,
        address:{
            line1:"138 Sagar Appartment",
            line2:"Baner Road",
            landmark:"Ideal Chauk",
            city:"Pune"
        }

    }
},
{
    empname:"Mangesh",
    empid:215572,
    empphone:[9579569745,9421981890,9422087808],
    company:{
        cname:"Wipro",
        cregistrationn_no:955824,
        address:{
            line1:"22/5,B",
            line2:"Market Yard",
            landmark:"Near Tilak Road",
            city:"Mumbai"
        }

    }
}];

let i=0;

while(i<Empinfo.length){

    console.log(Empinfo[i].empname);

    console.log(Empinfo[i].empid);
    
    let j=0;
    
    while(j<Empinfo[i].empphone.length){
    
        console.log(Empinfo[i].empphone[j]);

        j=j+1;

    }
    console.log(Empinfo[i].company.cname);
    console.log(Empinfo[i].company.cregistrationn_no);
    console.log(Empinfo[i].company.address.line1);
    console.log(Empinfo[i].company.address.line2);
    console.log(Empinfo[i].company.address.landmark);
    console.log(Empinfo[i].company.address.city);

    i=i+1;
    console.log("-------------------------");
}

