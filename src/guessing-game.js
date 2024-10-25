class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.currentGuess = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.currentGuess = Math.floor((min + max) / 2);
    }

    guess() {
        return this.currentGuess;
    }

    lower() {
        this.max = this.currentGuess;
        this.currentGuess = Math.floor((this.min + this.max) / 2);
    }

    greater() {
        this.min = this.currentGuess + 1;
        this.currentGuess = Math.floor((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;


