const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Password: ", function(input){
	input.toUpperCase()
	input.toLowerCase()

//input = Number()	
console.log(`${input.length} characters used`)

    
	if (input.length >= 10){
		//input.toUpperCase();

        console.log(`Password created Successfully`);
 
  } else {
      console.log('Password Failed: Please enter atleast 10 characters')
  }

  
	reader.close() // This line closes the connection to the command line interface.-
});







