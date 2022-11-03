let obj = {
    firstName:'Archana',
    lastName:'Kalkhaire'
   }
   
   console.log(obj.firstName);
   let key = 'lastName';
   console.log(obj[key]);
   //==================

   let message ={
    title: 'java script program',
    heading: 'basic'
   }

   let uniqueKey = Symbol('Any message');
   console.log(typeof uniqueKey);
   console.log(uniqueKey);
   message[uniqueKey] = 'Do more pratics';

   console.log(message);
   console.log(message[uniqueKey]);
