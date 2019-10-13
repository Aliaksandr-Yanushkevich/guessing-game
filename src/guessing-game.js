class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.min + this.max) / 2); // divide input range on two pieces
    }

    lower() {
        this.max =  Math.round((this.min + this.max) / 2); // if guessing number in first piece of the range
    }

    greater() {
        this.min =  Math.round((this.min + this.max) / 2); // if guessing number in second piece of the range
    }
}

module.exports = GuessingGame;
