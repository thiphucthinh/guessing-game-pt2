const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;

function checkGuess(number) {
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

function askRange() {
    rl.question("Enter a min number: ", function (min) {
        rl.question("Enter a max number: ", function (max) {
            min = Number(min);
            max = Number(max);

            console.log(`I'm thinking of a number between ${min} and ${max}...`);

            secretNumber = randomInRange(min, max);

            askGuess();
        })
    });
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function askGuess() {
    rl.question ('Enter a guess:', function (number) {
        const correctAnswer = checkGuess(number);

        if (correctAnswer) {
            console.log('You win');
            rl.close();
        }
        else {
            askGuess();
        }
    })
}

/***************************
 * Testing
 * ************************/
// askGuess();

askRange();
