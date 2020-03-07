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
    }

    initialize() {
        btnStart.classList.add('hide');
    }
}

// Boton de empezar juego

btnStart.addEventListener('click', () => {
    const game = new Game()
})