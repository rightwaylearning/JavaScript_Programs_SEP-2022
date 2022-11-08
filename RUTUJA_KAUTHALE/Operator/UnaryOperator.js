
		let a=10;
		 let b= ++a; // in this case first a increment his value and then assign.
	console.log("a "+a);// 11 
    console.log("b "+b); //11
		
		let d=10;
		let c=d++; // in this case first d assigned his value to c and then increment
		console.log("d  "+d);//11
		console.log("c  "+c);//10
		
        console.log("************************************************************");
		let l=12;
        let m1= l++;
        console.log("L = "+l);
        console.log("m1 = "+m1);

		//--(--l) 
        console.log(l);
        //it will give error because  the equation become --(11) and decrement and increment will 
		// not work on literal value 
		
		
		let d1= 12.50;
		d1++;
		console.log(d1);
		
		
        console.log("************************************************************");
		//example 
		
		let m=10;
		let n=20;
		
		let z;
		z= m++ + --n;  // 10 + 19 = 29 
		// m and n become m=11; n=19
		console.log(z);  //29
		
		
		z= m++ + ++n;  //11 + 20 = 31
		// m= 12 n=20 
		console.log(z); //31
		
		
		z= m-- + ++n; // 12+ 21= 33
		//m=11 n=21
		console.log(z); //33
		
	
		
		z=--m + n--; // 10+21= 31
		//m=10 n=20
		
		console.log(z);  //31
        console.log("************************************************************");	
		
		//Nested increment and decrement not allowed in JAVA
		
		//let P =25;
		//let Q=++(++P); //it will show error.
        //console.log(Q);
		console.log("	//Nested increment and decrement not allowed in JS");
		
        console.log("************************************************************");	
		
		
		
	