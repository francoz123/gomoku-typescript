import Game from "./game"
import GameTurn from "./gameturn"
import { PLAYER } from "./piece"

document.getElementById('start-button')?.addEventListener('click', () => {
    const input = document.getElementById('board-size') as HTMLInputElement | null
    const boardSize = Number(input?.value)
    if(!boardSize) return
    new Game(boardSize, PLAYER.BLACK).start()
})