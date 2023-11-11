function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100);
    let hasWon = false;
    let numberOfGuesses = 0;
    
    return function(guess) {
        if (hasWon) {
        return "The game is over, you already won!";
        }
    
        numberOfGuesses++;
    
        if (guess === secretNumber) {
        hasWon = true;
        return `You win! You found ${guess} in ${numberOfGuesses} guess${numberOfGuesses === 1 ? '' : 'es'}.`;
        } else if (guess < secretNumber) {
        return `${guess} is too low!`;
        } else {
        return `${guess} is too high!`;
        }
    };
}

module.exports = { guessingGame };
