// BOTONES DEL JUEGO

const skyblue = document.getElementById('skyblue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('btnStart')

// CLASE JUEGO

class Game {
    constructor() {
        this.chooseColor = this.chooseColor.bind(this)
        this.initialize();
        this.generateSequence();
        this.nextLevel();
    }

    initialize() {
        btnStart.classList.add("hide");
        this.level = 1;
        this.colors = {
            skyblue,
            violet,
            orange,
            green
        };
    }

    generateSequence() {
        this.sequence = new Array(10)
            .fill(0)
            .map(number => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.illuminateSequence();
        this.addEventClick();
    }

    transformNumberToColor(number) {
        switch (number) {
            case 0:
                return "skyblue";
            case 1:
                return "violet";
            case 2:
                return "orange";
            case 3:
                return "green";
        }
    }

    illuminateSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i]);

            setTimeout(() => {
                this.illuminateColor(color);
            }, 1000 * i);
        }
    }

    illuminateColor(color) {
        this.colors[color].classList.add("light");
        setTimeout(() => {
            this.turnOffColor(color);
        }, 350);
    }

    turnOffColor(color) {
        this.colors[color].classList.remove("light");
    }

    addEventClick() {
        this.colors.skyblue.addEventListener('click', this.chooseColor)
        this.colors.violet.addEventListener('click', this.chooseColor)
        this.colors.orange.addEventListener('click', this.chooseColor)
        this.colors.green.addEventListener('click', this.chooseColor)
    }

    chooseColor(e) {
        console.log(e);
        console.log(this);
    }
}

// Boton de empezar juego

btnStart.addEventListener('click', () => {
    window.game = new Game()
})