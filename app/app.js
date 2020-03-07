// BOTONES DEL JUEGO

const skyblue = document.getElementById('skyblue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('btnStart')

// CLASE JUEGO

class Game {
    constructor() {
        this.initialize()
        this.generateSequence()
        this.nextLevel()
    }

    initialize() {
        btnStart.classList.add('hide');
        this.level = 1
        this.colors = {
            skyblue,
            violet,
            orange,
            green
        }
    }

    generateSequence() {
        this.sequence = new Array(10).fill(0).map(number => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.illuminateSequence()
    }

    transformNumberToColor(number) {
        switch (number) {
            case 0:
                return 'skyblue'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
    }

    illuminateSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i]);

            setTimeout(() => {
                this.illuminateColor(color)
            }, 1000 * i);
        }
    }

    turnOffColor(color) {
        this.colors[color].classList.remove('light')
    }

    illuminateColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => {
            this.turnOffColor(color)
        }, 350);
    }
}

// Boton de empezar juego

btnStart.addEventListener('click', () => {
    window.game = new Game()
})