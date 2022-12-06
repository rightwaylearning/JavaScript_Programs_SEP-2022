// function getAge(birthDate){
// let now=new Date();

//  //var year=2022;
// // var months=year*12;
// // var days=years*365;
// let birthyear = 2020;
// // let presentdate=09/11/2022;
// //  let presentage=birthdate-presentdate;



// if(birthyear == 2021 || birthyear==2020){
//     console.log("1 to 2 years");
//     console.log("play Group 30000/-")
      
//  }
//  else if(birthyear==2019 ||  birthyear==2018){
//     console.log("2 to 3 years");
//     console.log("nursary 40000/-");

//  }
//  else if(birthyear==2017 ||  birthyear==2016){
//      console.log("3 to 4 years");
//      console.log("Lkg  50000/-");

// }else if(birthyear==2015 || birthyear== 2014){
//   console.log("4 to 5 years","Ukg  60000/-");
//  }
//  else{
//    console.log("sorry");
//  }
// return getAge;
// }
function getAge(birthDate) {
    var now = new Date();
  
    function isLeap(year) {
      return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }
  
    // days since the birthdate    
    var days = Math.floor((now.getTime() - birthDate.getTime())/1000/60/60/24);
    var age = 0;
    // iterate the years
    for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++){
      var daysInYear = isLeap(y) ? 366 : 365;
      if (days >= daysInYear){
        days -= daysInYear;
        age++;
        // increment the age only if there are available enough days for the year.
      }
    }
    return age;
  }