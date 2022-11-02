let obj = {
    firstName:'mahesh',
    lastName:'sharma'
   }
   
   console.log(obj.firstName);
   let key = 'lastName';
   console.log(obj[key]);

   //===========================================
   let message = {
    title:'regarding planning',
    heading:'war'
   }
   let uniqueKey = Symbol('any message');
   console.log(typeof uniqueKey);
   console.log(uniqueKey);
   message[uniqueKey] = 'dont attack wait atleast today night';


   console.log(message);
   console.log(message[uniqueKey]);



