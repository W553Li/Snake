import { onSnake, growSnake } from './snake.js'
import { randPosition } from './grid.js'

let score = 0
let apple = getRandApplePosition()
const grow_rate = 2
let scoreDisplay = document.querySelector('span')
scoreDisplay.innerText = score

export function update() {
    if (onSnake(apple)) {
        growSnake(grow_rate)
        apple = getRandApplePosition()
        score++
        scoreDisplay.textContent = score
    }
}



export function draw(gameBoard) {
    const appleElement = document.createElement('div')
    appleElement.style.gridRowStart = apple.y
    appleElement.style.gridColumnStart = apple.x
    appleElement.classList.add('apple')
    gameBoard.appendChild(appleElement)
}


function getRandApplePosition() {
    let newApplePosition
    while (newApplePosition == null || onSnake(newApplePosition)) {
        newApplePosition = randPosition()
    }
    return newApplePosition
}