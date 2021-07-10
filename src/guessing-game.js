class GuessingGame {
    constructor() {
       this.res = 0;
       this.max = 0;
       this.min = 0;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
        this.res = (this.min + this.max)/2;	    
        return Math.ceil(this.res);
    }

    lower() {
        this.max = Math.ceil(this.res);
    }

    greater() {
        this.min = Math.ceil(this.res);
    }
}

module.exports = GuessingGame;
