import Game from "./game"
import { PLAYER } from "./piece"

/** Add click action to the start button 
 * Retrieves board size and starts a new game.
*/
document.getElementById('start-button')?.addEventListener('click', () => {
    const input = document.getElementById('board-size') as HTMLInputElement | null
    const boardSize = Number(input?.value)
    if(!boardSize) return
    new Game(boardSize, PLAYER.BLACK).start()
})