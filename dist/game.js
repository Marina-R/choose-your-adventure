function* chooseYourAdventure() {
	// console.log(yield adventure.say('Hey there!'));
	// console.log(yield adventure.say('Woah', 'This is cool'));
	// console.log(yield adventure.ask('Woah', 'This is cool'));
	// console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield adventure.say('That\'s all folks!', 'THE END'));

	
	var name = yield adventure.ask ('Hey you! What is your name?');
	yield adventure.say('Welcome to my game, ' + name + '!');
	var game = yield adventure.choose ('Let\'s play "Rock Paper Scissor" game with me!', 'Let\'s do it!', 'Maybe some other time.');
	var choice = Math.floor(Math.random()*3)+1;  
	// var rock = 1;
	// var scissor = 2;
	// var paper = 3;
	if (game=='Let\'s do it!') {
		yield adventure.say ('Yeah! Make yourself comfortable.');
	} else {
		yield adventure.say ('Come back later! I\'ll get some cookies.');
	}
	var choose = yield adventure.choose('Please choose:', 'Rock', 'Paper', 'Scissors');
	if (choose=='Rock') {
		if (choice == 1) {
			yield adventure.say ('My choice is Rock. Try again!');
		} else if (choice==2) {
			yield adventure.say ('My choice is Paper. Nice try! I won!');
		} else {
			yield adventure.say ('My choice is Scissors. You won.');
		}
	} else if (choose=='Paper') {
		if (choice == 1) {
			yield adventure.say ('My choice is Rock. You won.');
		} else if (choice==2) {
			yield adventure.say ('My choice is Paper. Try again!');
		} else {
			yield adventure.say ('My choice is Scissors. Nice try! I won!');
		}
	} else {
		if (choice == 1) {
			yield adventure.say ('My choice is Rock. Nice try! I won!');
		} else if (choice==2) {
			yield adventure.say ('My choice is Paper. You won.');
		} else {
			yield adventure.say ('My choice is Scissors. Try again!');
		}
	}
	var play = yield adventure.choose ('Do you want to play again?', 'I\'ll take another try.', 'No, have to go back to learn more JS.');
	if (play == 'I\'ll take another try.') {
		yield adventure.say ('Get back to your JS books! Come back tomorrow :)');
	} else {
		yield adventure.say ('Come back later to improve my code :)');
	}
}
