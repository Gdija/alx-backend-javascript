/**
 * create a program that that will 
 * be executed through command line
 * */
process.stdout.write("Welcome to ALX, what is your name?\n");

process.stdin.on('data', data =>{
	//const name = data.toString().trim();
        //console.log(`Your name is: ${name}`);
	process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () =>{
	process.stdout.write('This important software is now closing\n');
});
