import {update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateApple, draw as drawApple} from './apple.js'
import {outsideGrid} from './grid.js'


var snake_speed = 2
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


document.getElementById("lowS").addEventListener("click", function() {
    snake_speed = 2
})


document.getElementById("medS").addEventListener("click", function() {
    snake_speed = 4
})


document.getElementById("highS").addEventListener("click", function() {
    snake_speed = 8
})


function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost! Press OK to restart!')) {
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snake_speed) return

    lastRenderTime = currentTime

    update()
    draw()
}


window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateApple()
    checkDeath()
}


function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawApple(gameBoard)
}


function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}