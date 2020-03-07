// BOTONES DEL JUEGO

const skyblue = document.getElementById('skyblue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('btnStart')

const LAST_LEVEL = 10

// CLASE JUEGO

class Game {
    constructor() {
        this.initialize();
        this.generateSequence();
        setTimeout(() => {
            this.nextLevel();
        }, 500);
    }

    initialize() {
        this.chooseColor = this.chooseColor.bind(this);
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
        this.sequence = new Array(LAST_LEVEL)
            .fill(0)
            .map(number => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.subLevel = 0
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

    transformColorToNumber(color) {
        switch (color) {
            case 'skyblue':
                return 0;
            case 'violet':
                return 1;
            case 'orange':
                return 2;
            case 'green':
                return 3;
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

    deleteEventClick() {
        this.colors.skyblue.removeEventListener("click", this.chooseColor);
        this.colors.violet.removeEventListener("click", this.chooseColor);
        this.colors.orange.removeEventListener("click", this.chooseColor);
        this.colors.green.removeEventListener("click", this.chooseColor);
    }

    chooseColor(ev) {
        const colorName = ev.target.dataset.color
        const colorNumber = this.transformColorToNumber(colorName)
        this.illuminateColor(colorName)
        if (colorNumber === this.sequence[this.subLevel]) {
            this.subLevel++
                if (this.subLevel === this.level) {
                    this.level++;
                    this.deleteEventClick()
                    if (this.level === (LAST_LEVEL + 1)) {
                        // Ganó
                    } else {
                        setTimeout(() => {
                            this.nextLevel()
                        }, 1500);
                    }
                }
        } else {
            // PERDIÓ
        }
    }
}

// Boton de empezar juego

btnStart.addEventListener('click', () => {
    window.game = new Game()
})