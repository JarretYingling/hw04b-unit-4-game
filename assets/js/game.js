// javascript

$(document).ready(function () {
    let log = function (para) {
        console.log(para);
    };

    log("document ready");

    let crystalsCollector = {
        gameState: false,
        target_min: 0,
        target_max: 0,
        target: 0,
        score: 0,
        crystal_min: 0,
        crystal_max: 0,
        crystals: ["red", "blue", "yellow", "green"],
        crystalValues: [0, 0, 0, 0],
        getRandomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let randomInt = Math.floor((Math.random() * (max - min + 1)) + min);
            return randomInt;
        },
        resetGame: function () {
            this.target_min = 19;
            this.target_max = 120;
            this.target = this.getRandomInt(this.target_min, this.target_max);
            this.crystal_min = 1;
            this.crystal_max = 12;
            for (let i = 0; i < this.crystals.length; i++) {
                this.crystalValues[i] = this.getRandomInt(this.crystal_min, this.crystal_max);
            };
            log(crystalsCollector);
        },
        updateGame: function (crystalID) {
            let crystalIndex = this.crystals.indexOf(crystalID);
            this.score = this.score + this.crystalValues[crystalIndex];
            log(crystalsCollector);
        }
    };

    crystalsCollector.resetGame();

    $(".crystal").on("click", function () {
        if (crystalsCollector.gameState == false) {
            crystalsCollector.gameState = true
        }
        crystalsCollector.updateGame($(this).attr("id"));
    });

});