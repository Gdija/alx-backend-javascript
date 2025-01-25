/**
 * create a program that that will 
 * be executed through command line
 * */
process.stdout.write("Welcome to ALX, what is your name?\n");

process.stdin.on('data', data =>{
        console.log(`Your name is: ${data.toString()}`);
});

process.stdin.on('end', () =>{
	console.log('This important software is now closing\n');
});
