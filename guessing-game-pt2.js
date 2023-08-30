const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = 5;

function checkGuess (number) {
    if (Number(number) > secretNumber) {
        console.log('Too high');
        return false;
    }
    else if (Number(number) < secretNumber) {
        console.log('Too low');
        return false;
    }
    else {
        console.log('correct');
        return true;
    }
}

function askGuess () {
    rl.question ('Enter a guess:', function (number) {
        const correctAnswer = checkGuess (number)
        if (correctAnswer) {
            console.log('You win');
            rl.close();
        }
        else {
            askGuess();
        }
    })
}

// Testing
askGuess();
