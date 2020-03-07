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
}

// Boton de empezar juego

btnStart.addEventListener('click', () => {
    window.game = new Game()
})