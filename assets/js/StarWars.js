// javascript

$(document).ready(function () {

    function Character(name, fileName, id, classes, force, hp, health) {
        this.player = false;
        this.opponent = false;
        this.alive = true;
        this.name = name;
        this.img_src = "assets/img/png/" + fileName; // html img src file path
        this.id = id; // css id
        this.classes = classes.join(" "); // css classes
        this.force = force;
        this.hp = hp;
        this.health = health;
        this.updatePlayer = function () {
            this.player = true;
        };
        this.updateOpponent = function () {
            this.opponent = true;
        };
        this.updateClasses = function () {
            $("#" + this.id).attr("class", this.classes);
        };
        this.attack = function () {

        };
    };

    let game = {
        /*
        chooseNextOpponent: false,
        force: null,
        lightSide: [],
        darkside: [],
        */
        getRandomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let randomInt = Math.floor((Math.random() * (max - min + 1)) + min);
            return randomInt;
        },
        resetGame: function () {
            console.log("start resetGame");
            this.active = false;
            this.chooseNextOpponent = false;
            this.force = null;
            this.alive = [];
            const LIGHTCLASSES = ["img", "character", "light", "test-light"];
            const DARKCLASSES = ["img", "character", "dark", "test-dark"];
            const LIGHTSIDE = ["light",
                new Character("Yoda", "yoda.png", "yoda", LIGHTCLASSES, true, 25, 200),
                new Character("Luke Skywalker", "luke-skywalker.png", "luke", LIGHTCLASSES, true, 25, 200),
                new Character("Princess Leia", "princess-leia.png", "leia", LIGHTCLASSES, true, 25, 200),
                new Character("Han Solo", "han-solo.png", "han", LIGHTCLASSES, true, 25, 200),
                new Character("Chewbacca", "chewbacca.png", "chewie", LIGHTCLASSES, true, 25, 200),
                new Character("Obiwan Kenobi", "obiwan-kenobi.png", "ben", LIGHTCLASSES, true, 25, 200),
                new Character("C-3P0", "c3p0.png", "c3p0", LIGHTCLASSES, true, 25, 200),
                new Character("R2-D2", "r2d2.png", "r2d2", LIGHTCLASSES, true, 25, 200)
            ];
            const DARKSIDE = ["dark",
                new Character("Emporer Palpatine", "emporer-palpatine.png", "emporer", DARKCLASSES, false, 25, 200),
                new Character("Darth Vader", "darth-vader.png", "vader", DARKCLASSES, false, 25, 200),
                new Character("Jabba the Hutt", "jabba-the-hutt.png", "jabba", DARKCLASSES, false, 25, 200),
                new Character("Greedo", "greedo.png", "greedo", DARKCLASSES, false, 25, 200),
                new Character("Boba Fett", "boba-fett.png", "boba", DARKCLASSES, false, 25, 200),
                new Character("Obiwan Kenobi", "obiwan-kenobi.png", "ben", DARKCLASSES, false, 25, 200),
                new Character("Tusken Raider", "tusken-raider.png", "tusken", DARKCLASSES, false, 25, 200),
                new Character("Jawa", "jawa.png", "jawa", DARKCLASSES, false, 25, 200)
            ];
            this.lightSide = LIGHTSIDE;
            this.darkSide = DARKSIDE;
            this.lightIds = [];
            this.darkIds = [];
            console.log(this.lightSide);
            console.log(this.darkSide);
            console.log("finish resetGame");
            return;
        },
        startGame: function () {
            console.log("start startGame");
            this.active = true;
            this.chooseNextOpponent = true;
            console.log("finish startGame");
            return;
        },
        chooseCharacter: function (id) {
            console.log("start chooseCharacter")
            // choose opponent
            if (this.nextOpponent) {
                console.log("updateOpponent")
                // this.opponent = true;
                this.nextOpponent = false;
                return;
            }
            if (this.active) {
                return;
            }
            // choose player
            console.log("updatePlayer");
            this.lightSide[1].updatePlayer();
            this.lightSide[1].updateClasses();
            this.active = true;
            this.nextOpponent = true;
            console.log("finish chooseCharacter");
            return;
        }
    }

    // initialize game
    game.resetGame();

    // on character image click
    $(".character").on("click", function () {
        let id = $(this).attr("id");
        console.log(id);
        game.chooseCharacter(id);
    });

});