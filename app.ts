import Game from "./game"
import GameTurn from "./gameturn"
import { PLAYER } from "./piece"

//document.getElementById('container')?.remove()
//document.getElementById('start-button')?.remove()
document.getElementById('start-button')?.addEventListener('click', () => {
    //document.getElementById('container')?.firstElementChild?.remove()
    const input = document.getElementById('board-size') as HTMLInputElement | null
    //const boardSize = Number(input?.value)
    alert(Number(input?.value))
    const boardSize = Number(input?.value)
    if(!boardSize) return
    new Game(boardSize, new GameTurn(PLAYER.BLACK)).start()
})