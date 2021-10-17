const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Password: ", function(input){
	
console.log(`${input.length}`)
    

	if (input.length <= 10){

        console.log('success');
 
  } else {
      console.log('failure')
  }
  
	
	reader.close() // This line closes the connection to the command line interface.-
});