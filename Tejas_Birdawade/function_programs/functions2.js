function calculatePercentage(subject1, subject2, subject3, subject4, subject5, outof){
    let sum = subject1 + subject2 + subject3 + subject4 + subject5 ;
    let percentage = (sum/outof)*100;
    console.log(percentage);
}


calculatePercentage(75,67,90,78,45, 500);
calculatePercentage(76,87,92,89,78, 500);
calculatePercentage(87,48,75,90,67, 500);