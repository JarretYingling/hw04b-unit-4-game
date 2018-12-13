// javascript

$(document).ready(function () {

    let crystalsCollector = {
        target_min: 19,
        target_max: 120,
        target: 0,
        crystal_min: 1,
        crystal_max: 12,
        crystalColors: ["red", "blue", "yellow", "green"],
        crystalValues: [],
        score: 0,
        wins: 0,
        losses: 0,
        getRandomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let randomInt = Math.floor((Math.random() * (max - min + 1)) + min);
            return randomInt;
        },
        resetGame: function () {
            this.target = this.getRandomInt(this.target_min, this.target_max);
            for (let i = 0; i < this.crystalColors.length; i++) {
                this.crystalValues[i] = this.getRandomInt(this.crystal_min, this.crystal_max);
                // force unique crystalValues
                for (j = 0; j < i; j++) {
                    if (this.crystalValues[i] == this.crystalValues[j]) {
                        i--;
                        break;
                    }
                }
            };
            $("#target").html("<h1>" + this.target + "</h1>");
            this.score = 0;
            $("#score").html("<h1></h1>");
            console.log(crystalsCollector);
            console.log(this.crystalValues);
        },
        updateGame: function (crystalID) {
            let crystalIndex = this.crystalColors.indexOf(crystalID);
            this.score = this.score + this.crystalValues[crystalIndex];
            $("#score").html("<h1>" + this.score + "</h1>");
            console.log(crystalsCollector);
            if (this.score < this.target) {
                return;
            }
            if (this.score === this.target) {
                this.wins++;
                $("#result").text("You WON!");
                $("#wins").text(this.wins);
                alert("You WON!");
                this.resetGame();
                return;
            }
            if (this.score > this.target) {
                this.losses++;
                $("#result").text("You LOST!");
                $("#losses").text(this.losses);
                alert("You LOST!");
                this.resetGame();
                return;
            }
        }
    };

    // initialize the game
    crystalsCollector.resetGame();

    // on crystal click
    $(".crystal").on("click", function () {
        crystalsCollector.updateGame($(this).attr("id"));
    });

});